"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
class AuthController {
    constructor() {
        this.jwtSecret = process.env.JWT_SECRET || "default_secret";
        this.refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "default_refresh_secret";
        this.authService = new auth_service_1.AuthService();
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, password } = req.body;
                // Check if email already exists
                const existingEmail = yield this.authService.findUserByEmailOrUsername(email);
                if (existingEmail) {
                    return res.status(409).json({ message: "Email or Username already exists" });
                }
                // Hash the password
                const hashPassword = yield argon2_1.default.hash(password);
                // Create the user
                const user = yield this.authService.createUser(username, email, hashPassword);
                return res.status(201).json(user);
            }
            catch (error) {
                next(error);
            }
        });
        this.loginUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email: emailOrUsername, password } = req.body;
                const user = yield this.authService.findUserByEmailOrUsername(emailOrUsername);
                if (!user) {
                    return res.status(404).json({ message: "ไม่พบบัญชีผู้ใช้" });
                }
                const valid = yield argon2_1.default.verify(user.password || "", password);
                if (!valid) {
                    return res.status(401).json({ message: "รหัสผ่านไม่ถูกต้อง" });
                }
                return res.json(this.createAuthTokens(user));
            }
            catch (error) {
                next(error);
            }
        });
        this.googleLogin = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const clientId = process.env.GOOGLE_CLIENT_ID;
            const redirectUri = process.env.GOOGLE_REDIRECT_URI;
            if (!clientId || !redirectUri) {
                return res.status(503).json({ message: "Google login is not configured" });
            }
            const state = crypto_1.default.randomBytes(32).toString("hex");
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
        });
        this.googleCallback = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const clientUrl = process.env.CLIENT_URL || "http://localhost:8080";
            const callbackUrl = `${clientUrl}/auth/google/callback`;
            try {
                const code = typeof req.query.code === "string" ? req.query.code : "";
                const state = typeof req.query.state === "string" ? req.query.state : "";
                const cookieState = (_b = (_a = req.headers.cookie) === null || _a === void 0 ? void 0 : _a.split(";").map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith("google_oauth_state="))) === null || _b === void 0 ? void 0 : _b.split("=")[1];
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
                const tokenResponse = yield fetch("https://oauth2.googleapis.com/token", {
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
                const googleTokens = (yield tokenResponse.json());
                if (!tokenResponse.ok || !googleTokens.access_token) {
                    throw new Error(googleTokens.error_description || googleTokens.error || "Google token exchange failed");
                }
                const userInfoResponse = yield fetch("https://www.googleapis.com/oauth2/v2/userinfo", { headers: { Authorization: `Bearer ${googleTokens.access_token}` } });
                const googleUser = (yield userInfoResponse.json());
                if (!userInfoResponse.ok || !googleUser.email || !googleUser.verified_email) {
                    return res.redirect(`${callbackUrl}#error=google_email_not_verified`);
                }
                const user = yield this.authService.findOrCreateGoogleUser(googleUser.email, googleUser.name || googleUser.email.split("@")[0]);
                const { token } = this.createAuthTokens(user);
                return res.redirect(`${callbackUrl}#token=${encodeURIComponent(token)}`);
            }
            catch (error) {
                console.error("Google OAuth callback failed:", error);
                return res.redirect(`${callbackUrl}#error=google_login_failed`);
            }
        });
        this.refreshToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.body;
                if (!refreshToken) {
                    return res.status(400).json({ message: "Refresh token is required" });
                }
                jsonwebtoken_1.default.verify(refreshToken, this.refreshTokenSecret, (err, decoded) => {
                    if (err) {
                        return res.status(403).json({ message: "Invalid refresh token" });
                    }
                    const newToken = jsonwebtoken_1.default.sign({
                        id: decoded.id,
                    }, this.jwtSecret, { expiresIn: "15m" });
                    return res.json({ token: newToken });
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getUserMe = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            try {
                const authHeader = req.headers.authorization;
                if (!authHeader || !authHeader.startsWith("Bearer ")) {
                    return res.status(401).json({ message: "Token missing or invalid" });
                }
                const token = authHeader.split(" ")[1];
                const decodedToken = jsonwebtoken_1.default.verify(token, this.jwtSecret);
                const user = yield this.authService.findById(decodedToken.id);
                if (!user) {
                    return res.status(404).json({ message: "ไม่พบบัญชีผู้ใช้" });
                }
                return res.json({
                    user_id: user.user_id,
                    email: user.email,
                    username: user.username,
                    name: (_b = (_a = user.booking_profile) === null || _a === void 0 ? void 0 : _a.first_name) !== null && _b !== void 0 ? _b : null,
                    lastname: (_d = (_c = user.booking_profile) === null || _c === void 0 ? void 0 : _c.last_name) !== null && _d !== void 0 ? _d : null,
                    phone: (_f = (_e = user.booking_profile) === null || _e === void 0 ? void 0 : _e.phone) !== null && _f !== void 0 ? _f : null,
                    id_card: (_h = (_g = user.booking_profile) === null || _g === void 0 ? void 0 : _g.id_card) !== null && _h !== void 0 ? _h : null,
                    current_province: (_k = (_j = user.booking_profile) === null || _j === void 0 ? void 0 : _j.current_province) !== null && _k !== void 0 ? _k : null,
                    current_district: (_m = (_l = user.booking_profile) === null || _l === void 0 ? void 0 : _l.current_district) !== null && _m !== void 0 ? _m : null,
                    current_subdistrict: (_p = (_o = user.booking_profile) === null || _o === void 0 ? void 0 : _o.current_subdistrict) !== null && _p !== void 0 ? _p : null,
                    current_zipcode: (_r = (_q = user.booking_profile) === null || _q === void 0 ? void 0 : _q.current_zipcode) !== null && _r !== void 0 ? _r : null,
                    current_address_detail: (_t = (_s = user.booking_profile) === null || _s === void 0 ? void 0 : _s.current_address_detail) !== null && _t !== void 0 ? _t : null,
                    image_profile: null,
                    user_type: user.user_type,
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.updateUserMe = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
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
                const user = yield this.authService.updateProfile(userId, {
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
                    user_id: user === null || user === void 0 ? void 0 : user.user_id,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    username: user === null || user === void 0 ? void 0 : user.username,
                    name: (_c = (_b = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _b === void 0 ? void 0 : _b.first_name) !== null && _c !== void 0 ? _c : null,
                    lastname: (_e = (_d = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _d === void 0 ? void 0 : _d.last_name) !== null && _e !== void 0 ? _e : null,
                    phone: (_g = (_f = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _f === void 0 ? void 0 : _f.phone) !== null && _g !== void 0 ? _g : null,
                    id_card: (_j = (_h = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _h === void 0 ? void 0 : _h.id_card) !== null && _j !== void 0 ? _j : null,
                    current_province: (_l = (_k = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _k === void 0 ? void 0 : _k.current_province) !== null && _l !== void 0 ? _l : null,
                    current_district: (_o = (_m = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _m === void 0 ? void 0 : _m.current_district) !== null && _o !== void 0 ? _o : null,
                    current_subdistrict: (_q = (_p = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _p === void 0 ? void 0 : _p.current_subdistrict) !== null && _q !== void 0 ? _q : null,
                    current_zipcode: (_s = (_r = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _r === void 0 ? void 0 : _r.current_zipcode) !== null && _s !== void 0 ? _s : null,
                    current_address_detail: (_u = (_t = user === null || user === void 0 ? void 0 : user.booking_profile) === null || _t === void 0 ? void 0 : _t.current_address_detail) !== null && _u !== void 0 ? _u : null,
                    image_profile: null,
                    user_type: user === null || user === void 0 ? void 0 : user.user_type,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    createAuthTokens(user) {
        const token = jsonwebtoken_1.default.sign({
            id: user.user_id,
            email: user.email,
            username: user.username,
            user_type: user.user_type,
        }, this.jwtSecret, { expiresIn: "1d" });
        const refreshToken = jsonwebtoken_1.default.sign({ id: user.user_id }, this.refreshTokenSecret, { expiresIn: "7d" });
        return { token, refreshToken };
    }
}
exports.AuthController = AuthController;
