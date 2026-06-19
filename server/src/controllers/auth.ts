import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { TypedRequestBody } from "../utils/request";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import crypto from "crypto";

type GoogleTokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

type GoogleUserInfo = {
  email?: string;
  name?: string;
  verified_email?: boolean;
};

export class AuthController {
  private jwtSecret = process.env.JWT_SECRET || "default_secret";
  private refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "default_refresh_secret";
  private authService = new AuthService();

  private createAuthTokens(user: {
    user_id: number;
    email: string | null;
    username: string | null;
    user_type: number | null;
  }) {
    const token = jwt.sign(
      {
        id: user.user_id,
        email: user.email,
        username: user.username,
        user_type: user.user_type,
      },
      this.jwtSecret,
      { expiresIn: "1d" }
    );

    const refreshToken = jwt.sign(
      { id: user.user_id },
      this.refreshTokenSecret,
      { expiresIn: "7d" }
    );

    return { token, refreshToken };
  }

  public createUser = async (
    req: TypedRequestBody<{
      username: string;
      email: string;
      password: string;
    }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username, email, password } = req.body;

      // Check if email already exists
      const existingEmail = await this.authService.findUserByEmailOrUsername(email);
      if (existingEmail) {
        return res.status(409).json({ message: "Email or Username already exists" });
      }

      // Hash the password
      const hashPassword = await argon2.hash(password);

      // Create the user
      const user = await this.authService.createUser(
        username,
        email,
        hashPassword
      );

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  public loginUser = async (
    req: TypedRequestBody<{
      email: string;
      password: string;
    }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email: emailOrUsername, password } = req.body;
      
      const user = await this.authService.findUserByEmailOrUsername(emailOrUsername);
      if (!user) {
        return res.status(404).json({ message: "ไม่พบบัญชีผู้ใช้" });
      }

      const valid = await argon2.verify(user.password || "", password);
      if (!valid) {
        return res.status(401).json({ message: "รหัสผ่านไม่ถูกต้อง" });
      }

      return res.json(this.createAuthTokens(user));
    } catch (error) {
      next(error);
    }
  };

  public googleLogin = async (_req: Request, res: Response) => {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;

    if (!clientId || !redirectUri) {
      return res.status(503).json({ message: "Google login is not configured" });
    }

    const state = crypto.randomBytes(32).toString("hex");
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("google_oauth_state", state, {
      httpOnly: true,
      sameSite: "lax",
      secure: isProduction,
      maxAge: 10 * 60 * 1000,
    });

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: "openid email profile",
      state,
      prompt: "select_account",
    });

    return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
  };

  public googleCallback = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const clientUrl = process.env.CLIENT_URL || "http://localhost:8080";
    const callbackUrl = `${clientUrl}/auth/google/callback`;

    try {
      const code = typeof req.query.code === "string" ? req.query.code : "";
      const state = typeof req.query.state === "string" ? req.query.state : "";
      const cookieState = req.headers.cookie
        ?.split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith("google_oauth_state="))
        ?.split("=")[1];

      res.clearCookie("google_oauth_state");

      if (!code || !state || !cookieState || state !== cookieState) {
        return res.redirect(`${callbackUrl}#error=invalid_oauth_state`);
      }

      const clientId = process.env.GOOGLE_CLIENT_ID;
      const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
      const redirectUri = process.env.GOOGLE_REDIRECT_URI;
      if (!clientId || !clientSecret || !redirectUri) {
        return res.redirect(`${callbackUrl}#error=google_not_configured`);
      }

      const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }),
      });
      const googleTokens = (await tokenResponse.json()) as GoogleTokenResponse;

      if (!tokenResponse.ok || !googleTokens.access_token) {
        throw new Error(
          googleTokens.error_description || googleTokens.error || "Google token exchange failed"
        );
      }

      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        { headers: { Authorization: `Bearer ${googleTokens.access_token}` } }
      );
      const googleUser = (await userInfoResponse.json()) as GoogleUserInfo;

      if (!userInfoResponse.ok || !googleUser.email || !googleUser.verified_email) {
        return res.redirect(`${callbackUrl}#error=google_email_not_verified`);
      }

      const user = await this.authService.findOrCreateGoogleUser(
        googleUser.email,
        googleUser.name || googleUser.email.split("@")[0]
      );
      const { token } = this.createAuthTokens(user);

      return res.redirect(
        `${callbackUrl}#token=${encodeURIComponent(token)}`
      );
    } catch (error) {
      console.error("Google OAuth callback failed:", error);
      return res.redirect(`${callbackUrl}#error=google_login_failed`);
    }
  };

  public refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        return res.status(400).json({ message: "Refresh token is required" });
      }

      jwt.verify(refreshToken, this.refreshTokenSecret, (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
          return res.status(403).json({ message: "Invalid refresh token" });
        }

        const newToken = jwt.sign(
          {
            id: decoded.id,
          },
          this.jwtSecret,
          { expiresIn: "15m" }
        );

        return res.json({ token: newToken });
      });
    } catch (error) {
      next(error);
    }
  };

  public getUserMe = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token missing or invalid" });
      }

      const token = authHeader.split(" ")[1];
      const decodedToken = jwt.verify(token, this.jwtSecret) as jwt.JwtPayload;

      const user = await this.authService.findById(decodedToken.id);
      if (!user) {
        return res.status(404).json({ message: "ไม่พบบัญชีผู้ใช้" });
      }

      return res.json({
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        name: user.booking_profile?.first_name ?? null,
        lastname: user.booking_profile?.last_name ?? null,
        phone: user.booking_profile?.phone ?? null,
        id_card: user.booking_profile?.id_card ?? null,
        current_province: user.booking_profile?.current_province ?? null,
        current_district: user.booking_profile?.current_district ?? null,
        current_subdistrict: user.booking_profile?.current_subdistrict ?? null,
        current_zipcode: user.booking_profile?.current_zipcode ?? null,
        current_address_detail: user.booking_profile?.current_address_detail ?? null,
        image_profile: null,
        user_type: user.user_type,
      });
    } catch (error) {
      next(error);
    }
  };

  public updateUserMe = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = (req as any).user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const name = typeof req.body.name === "string" ? req.body.name : undefined;
      const lastname = typeof req.body.lastname === "string" ? req.body.lastname : undefined;
      const phone = typeof req.body.phone === "string" ? req.body.phone : undefined;
      if (!phone || !/^\d{10}$/.test(phone)) {
        return res.status(400).json({
          message: "กรุณากรอกเบอร์โทรเป็นตัวเลข 10 หลัก",
        });
      }
      const id_card = typeof req.body.id_card === "string" ? req.body.id_card : undefined;
      if (!id_card || !/^\d{13}$/.test(id_card)) {
        return res.status(400).json({
          message: "กรุณากรอกเลขบัตรประชาชนเป็นตัวเลข 13 หลัก",
        });
      }
      const current_province = typeof req.body.current_province === "string" ? req.body.current_province : undefined;
      const current_district = typeof req.body.current_district === "string" ? req.body.current_district : undefined;
      const current_subdistrict = typeof req.body.current_subdistrict === "string" ? req.body.current_subdistrict : undefined;
      const current_zipcode = typeof req.body.current_zipcode === "string" ? req.body.current_zipcode : undefined;
      const current_address_detail = typeof req.body.current_address_detail === "string" ? req.body.current_address_detail : undefined;

      const user = await this.authService.updateProfile(userId, {
        name,
        lastname,
        phone,
        id_card,
        current_province,
        current_district,
        current_subdistrict,
        current_zipcode,
        current_address_detail,
      });

      return res.json({
        user_id: user?.user_id,
        email: user?.email,
        username: user?.username,
        name: user?.booking_profile?.first_name ?? null,
        lastname: user?.booking_profile?.last_name ?? null,
        phone: user?.booking_profile?.phone ?? null,
        id_card: user?.booking_profile?.id_card ?? null,
        current_province: user?.booking_profile?.current_province ?? null,
        current_district: user?.booking_profile?.current_district ?? null,
        current_subdistrict: user?.booking_profile?.current_subdistrict ?? null,
        current_zipcode: user?.booking_profile?.current_zipcode ?? null,
        current_address_detail: user?.booking_profile?.current_address_detail ?? null,
        image_profile: null,
        user_type: user?.user_type,
      });
    } catch (error) {
      next(error);
    }
  };


}
