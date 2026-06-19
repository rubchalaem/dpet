import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma";

export class BookingService {
  /**
   * Create a new booking
   */
  public async createBooking(data: {
    user_id: number;
    package_id: number;
    schedule_id: number;
    people_count: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    id_card: string;
    current_address: string;
    identity_address: string;
    current_province?: string;
    current_district?: string;
    current_subdistrict?: string;
    current_zipcode?: string;
    current_address_detail?: string;
    identity_province?: string;
    identity_district?: string;
    identity_subdistrict?: string;
    identity_zipcode?: string;
    identity_address_detail?: string;
  }) {
    return prisma.$transaction(async (tx) => {
      const tourPackage = await tx.tour_packages.findUnique({
        where: { package_id: data.package_id },
      });

      if (!tourPackage) {
        throw new Error("PACKAGE_NOT_FOUND");
      }

      const updatedRows = await tx.$executeRaw`
        UPDATE package_schedules
        SET booked_seats = booked_seats + ${data.people_count}
        WHERE id = ${data.schedule_id}
          AND package_id = ${data.package_id}
          AND booked_seats + ${data.people_count} <= capacity
      `;

      if (Number(updatedRows) !== 1) {
        throw new Error("INSUFFICIENT_SEATS");
      }

      const totalPrice = new Prisma.Decimal(tourPackage.price).mul(data.people_count);

      const booking = await tx.bookings.create({
        data: {
          user_id: data.user_id,
          package_id: data.package_id,
          schedule_id: data.schedule_id,
          people_count: data.people_count,
          total_price: totalPrice,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          id_card: data.id_card,
          current_address: data.current_address,
          identity_address: data.identity_address,
          current_province: data.current_province,
          current_district: data.current_district,
          current_subdistrict: data.current_subdistrict,
          current_zipcode: data.current_zipcode,
          current_address_detail: data.current_address_detail,
          identity_province: data.identity_province,
          identity_district: data.identity_district,
          identity_subdistrict: data.identity_subdistrict,
          identity_zipcode: data.identity_zipcode,
          identity_address_detail: data.identity_address_detail,
          status: "PENDING",
          booking_status: "PENDING",
        },
        include: {
          package: { include: { attraction: true } },
          schedule: true,
          payments: true,
        },
      });

      await tx.user_booking_profiles.upsert({
        where: { user_id: data.user_id },
        create: {
          user_id: data.user_id,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          id_card: data.id_card,
          current_province: data.current_province,
          current_district: data.current_district,
          current_subdistrict: data.current_subdistrict,
          current_zipcode: data.current_zipcode,
          current_address_detail: data.current_address_detail,
          identity_province: data.identity_province,
          identity_district: data.identity_district,
          identity_subdistrict: data.identity_subdistrict,
          identity_zipcode: data.identity_zipcode,
          identity_address_detail: data.identity_address_detail,
        },
        update: {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          id_card: data.id_card,
          current_province: data.current_province,
          current_district: data.current_district,
          current_subdistrict: data.current_subdistrict,
          current_zipcode: data.current_zipcode,
          current_address_detail: data.current_address_detail,
          identity_province: data.identity_province,
          identity_district: data.identity_district,
          identity_subdistrict: data.identity_subdistrict,
          identity_zipcode: data.identity_zipcode,
          identity_address_detail: data.identity_address_detail,
        },
      });

      return booking;
    });
  }

  public async getBookingDefaults(user_id: number) {
    return prisma.user_booking_profiles.findUnique({
      where: { user_id },
    });
  }

  /**
   * Get all bookings for a user
   */
  public async getMyBookings(user_id: number) {
    return prisma.bookings.findMany({
      where: { user_id },
      include: {
        package: {
          include: {
            attraction: {
              include: { images: true }
            }
          }
        },
        schedule: true,
        payments: true,
      },
      orderBy: { booking_date: "desc" },
    });
  }

  public async cancelBooking(booking_id: number, user_id: number) {
    return prisma.$transaction(async (tx) => {
      const booking = await tx.bookings.findFirst({
        where: { booking_id, user_id },
      });

      if (!booking) throw new Error("BOOKING_NOT_FOUND");
      if (booking.booking_status !== "PENDING") throw new Error("CANNOT_CANCEL");

      const updated = await tx.bookings.update({
        where: { booking_id },
        data: {
          booking_status: "CANCELLED",
          status: "CANCELLED",
        },
        include: {
          package: { include: { attraction: true } },
          schedule: true,
          payments: true,
        },
      });

      if (booking.schedule_id) {
        await tx.package_schedules.update({
          where: { id: booking.schedule_id },
          data: { booked_seats: { decrement: booking.people_count } },
        });
      }

      return updated;
    });
  }
}
