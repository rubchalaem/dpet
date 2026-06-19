import { PrismaClient } from "@prisma/client";
import logger, { logDebug, logError } from "../utils/logger";

export class AuthService {
  private prisma = new PrismaClient();

  public async findUserByEmailOrUsername(emailOrUsername: string) {
    return this.prisma.users.findFirst({
      where: {
        OR: [
          { email: emailOrUsername },
          { username: emailOrUsername },
        ],
      },
    });
  }

  public async createUser(
    username: string,
    email: string,
    password: string,
    created_at: Date = new Date()
  ) {
    return this.prisma.users.create({
      data: { username, email, password, created_at },
    });
  }

  public async findOrCreateGoogleUser(email: string, name: string) {
    const existingUser = await this.prisma.users.findFirst({
      where: { email },
    });

    if (existingUser) {
      return existingUser;
    }

    return this.prisma.users.create({
      data: {
        email,
        username: name || email.split("@")[0],
        password: null,
      },
    });
  }

  public async findById(userId: number) {
    return this.prisma.users.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        username: true,
        email: true,
        user_type: true,
        booking_profile: {
          select: {
            first_name: true,
            last_name: true,
            phone: true,
            id_card: true,
            current_province: true,
            current_district: true,
            current_subdistrict: true,
            current_zipcode: true,
            current_address_detail: true,
          },
        },
      },
    });
  }

  public async updateProfile(
    userId: number,
    data: {
      name?: string;
      lastname?: string;
      phone?: string;
      id_card?: string;
      current_province?: string;
      current_district?: string;
      current_subdistrict?: string;
      current_zipcode?: string;
      current_address_detail?: string;
    }
  ) {
    const currentUser = await this.prisma.users.findUnique({
      where: { user_id: userId },
      select: { email: true },
    });

    await this.prisma.user_booking_profiles.upsert({
      where: { user_id: userId },
      create: {
        user_id: userId,
        first_name: data.name,
        last_name: data.lastname,
        phone: data.phone,
        id_card: data.id_card,
        email: currentUser?.email ?? undefined,
        current_province: data.current_province,
        current_district: data.current_district,
        current_subdistrict: data.current_subdistrict,
        current_zipcode: data.current_zipcode,
        current_address_detail: data.current_address_detail,
      },
      update: {
        first_name: data.name,
        last_name: data.lastname,
        phone: data.phone,
        id_card: data.id_card,
        current_province: data.current_province,
        current_district: data.current_district,
        current_subdistrict: data.current_subdistrict,
        current_zipcode: data.current_zipcode,
        current_address_detail: data.current_address_detail,
      },
    });

    return this.findById(userId);
  }
}
