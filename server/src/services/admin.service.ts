import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma";

export class AdminService {
  public async listBookings() {
    return prisma.bookings.findMany({
      include: {
        user: true,
        package: { include: { attraction: true } },
        schedule: true,
        payments: true,
      },
      orderBy: { booking_date: "desc" },
    });
  }

  public async updateBookingStatus(booking_id: number, booking_status: string) {
    return prisma.bookings.update({
      where: { booking_id },
      data: { booking_status, status: booking_status },
    });
  }

  public async verifyPayment(payment_id: number) {
    return prisma.$transaction(async (tx) => {
      const payment = await tx.payments.update({
        where: { payment_id },
        data: { payment_status: "VERIFIED", paid_at: new Date() },
      });
      await tx.bookings.update({
        where: { booking_id: payment.booking_id },
        data: { booking_status: "CONFIRMED", status: "CONFIRMED" },
      });
      return payment;
    });
  }

  public async rejectPayment(payment_id: number) {
    return prisma.payments.update({ where: { payment_id }, data: { payment_status: "REJECTED" } });
  }

  public async listAttractions() {
    return prisma.tourist_attractions.findMany({
      include: {
        category: true,
        images: { orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }] },
        _count: { select: { tour_packages: true } },
      },
      orderBy: [{ is_popular: "desc" }, { attraction_id: "asc" }],
    });
  }

  public async createAttraction(data: any) {
    return prisma.tourist_attractions.create({
      data: {
        attraction_name: data.attraction_name,
        location: data.location,
        district: data.district,
        subdistrict: data.subdistrict,
        description: data.description,
        opening_time: data.opening_time,
        category_id: data.category_id ? Number(data.category_id) : undefined,
        map_url: data.map_url,
        latitude: data.latitude ? new Prisma.Decimal(data.latitude) : undefined,
        longitude: data.longitude ? new Prisma.Decimal(data.longitude) : undefined,
        address: data.address,
        is_popular: Boolean(data.is_popular),
      },
      include: { category: true, images: true },
    });
  }

  public async updateAttraction(attraction_id: number, data: any) {
    return prisma.tourist_attractions.update({
      where: { attraction_id },
      data: {
        attraction_name: data.attraction_name,
        location: data.location,
        district: data.district,
        subdistrict: data.subdistrict,
        description: data.description,
        opening_time: data.opening_time,
        category_id: data.category_id === "" || data.category_id === undefined ? undefined : Number(data.category_id),
        map_url: data.map_url,
        latitude: data.latitude === "" || data.latitude === undefined ? undefined : new Prisma.Decimal(data.latitude),
        longitude: data.longitude === "" || data.longitude === undefined ? undefined : new Prisma.Decimal(data.longitude),
        address: data.address,
        is_popular: data.is_popular === undefined ? undefined : Boolean(data.is_popular),
      },
      include: { category: true, images: true },
    });
  }

  public async deleteAttraction(attraction_id: number) {
    const packageCount = await prisma.tour_packages.count({ where: { attraction_id } });
    if (packageCount > 0) {
      const error = new Error("ATTRACTION_HAS_PACKAGES") as Error & { status?: number };
      error.status = 409;
      throw error;
    }
    await prisma.attraction_images.deleteMany({ where: { attraction_id } });
    await prisma.reviews.deleteMany({ where: { attraction_id } });
    await prisma.favorites.deleteMany({ where: { attraction_id } });
    return prisma.tourist_attractions.delete({ where: { attraction_id } });
  }

  public async addAttractionImage(data: {
    attraction_id: number;
    image_url: string;
    caption?: string;
    is_cover?: boolean;
    sort_order?: number;
  }) {
    if (data.is_cover) {
      await prisma.attraction_images.updateMany({
        where: { attraction_id: data.attraction_id },
        data: { is_cover: false },
      });
    }
    return prisma.attraction_images.create({ data });
  }

  public async deleteAttractionImage(image_id: number) {
    return prisma.attraction_images.delete({ where: { image_id } });
  }

  public async setCoverImage(image_id: number) {
    const image = await prisma.attraction_images.findUnique({ where: { image_id } });
    if (!image) throw new Error("IMAGE_NOT_FOUND");
    await prisma.attraction_images.updateMany({
      where: { attraction_id: image.attraction_id },
      data: { is_cover: false },
    });
    return prisma.attraction_images.update({ where: { image_id }, data: { is_cover: true } });
  }

  public async listPackages() {
    return prisma.tour_packages.findMany({
      include: {
        attraction: true,
        _count: { select: { bookings: true } },
        schedules: {
          include: { _count: { select: { bookings: true } } },
          orderBy: { date: "asc" },
        },
      },
      orderBy: { package_id: "asc" },
    });
  }

  public async createPackage(data: any) {
    return prisma.tour_packages.create({
      data: {
        package_name: data.package_name,
        description: data.description,
        price: new Prisma.Decimal(data.price || 0),
        duration: data.duration,
        attraction_id: Number(data.attraction_id),
      },
      include: { attraction: true, schedules: true },
    });
  }

  public async updatePackage(package_id: number, data: any) {
    return prisma.tour_packages.update({
      where: { package_id },
      data: {
        package_name: data.package_name,
        description: data.description,
        price: data.price === undefined ? undefined : new Prisma.Decimal(data.price),
        duration: data.duration,
        attraction_id: data.attraction_id === undefined ? undefined : Number(data.attraction_id),
      },
      include: { attraction: true, schedules: true },
    });
  }

  public async deletePackage(package_id: number) {
    const bookingCount = await prisma.bookings.count({ where: { package_id } });
    if (bookingCount > 0) {
      const error = new Error("PACKAGE_HAS_BOOKINGS") as Error & { status?: number };
      error.status = 409;
      throw error;
    }
    await prisma.package_schedules.deleteMany({ where: { package_id } });
    return prisma.tour_packages.delete({ where: { package_id } });
  }

  public async createSchedule(data: any) {
    return prisma.package_schedules.create({
      data: {
        package_id: Number(data.package_id),
        date: new Date(data.date),
        capacity: Number(data.capacity),
        booked_seats: Number(data.booked_seats || 0),
      },
    });
  }

  public async updateSchedule(id: number, data: any) {
    return prisma.package_schedules.update({
      where: { id },
      data: {
        date: data.date ? new Date(data.date) : undefined,
        capacity: data.capacity === undefined ? undefined : Number(data.capacity),
        booked_seats: data.booked_seats === undefined ? undefined : Number(data.booked_seats),
      },
    });
  }

  public async deleteSchedule(id: number) {
    const bookingCount = await prisma.bookings.count({ where: { schedule_id: id } });
    if (bookingCount > 0) {
      const error = new Error("SCHEDULE_HAS_BOOKINGS") as Error & { status?: number };
      error.status = 409;
      throw error;
    }
    return prisma.package_schedules.delete({ where: { id } });
  }

  public async deleteBooking(booking_id: number) {
    return prisma.$transaction(async (tx) => {
      const booking = await tx.bookings.findUnique({ where: { booking_id } });
      if (!booking) {
        const error = new Error("BOOKING_NOT_FOUND") as Error & { status?: number };
        error.status = 404;
        throw error;
      }

      await tx.payments.deleteMany({ where: { booking_id } });

      if (booking.schedule_id && booking.booking_status !== "CANCELLED") {
        const schedule = await tx.package_schedules.findUnique({ where: { id: booking.schedule_id } });
        if (schedule) {
          await tx.package_schedules.update({
            where: { id: booking.schedule_id },
            data: { booked_seats: Math.max(0, schedule.booked_seats - booking.people_count) },
          });
        }
      }

      return tx.bookings.delete({ where: { booking_id } });
    });
  }

  public async listUsers() {
    const users = await prisma.users.findMany({
      select: {
        user_id: true,
        username: true,
        email: true,
        user_type: true,
        is_active: true,
        created_at: true,
        booking_profile: {
          select: {
            first_name: true,
            last_name: true,
            phone: true,
          },
        },
      },
      orderBy: { user_id: "asc" },
    });

    return users.map((user) => ({
      user_id: user.user_id,
      username: user.username,
      name: user.booking_profile?.first_name ?? null,
      lastname: user.booking_profile?.last_name ?? null,
      email: user.email,
      phone: user.booking_profile?.phone ?? null,
      user_type: user.user_type,
      is_active: user.is_active,
      created_at: user.created_at,
    }));
  }

  public async updateUser(user_id: number, data: any) {
    const user = await prisma.users.update({
      where: { user_id },
      data: {
        user_type: data.user_type === undefined ? undefined : Number(data.user_type),
        is_active: data.is_active === undefined ? undefined : Boolean(data.is_active),
      },
      select: {
        user_id: true,
        username: true,
        email: true,
        user_type: true,
        is_active: true,
        booking_profile: {
          select: {
            first_name: true,
            last_name: true,
            phone: true,
          },
        },
      },
    });

    return {
      user_id: user.user_id,
      username: user.username,
      name: user.booking_profile?.first_name ?? null,
      lastname: user.booking_profile?.last_name ?? null,
      email: user.email,
      phone: user.booking_profile?.phone ?? null,
      user_type: user.user_type,
      is_active: user.is_active,
    };
  }

  public async report() {
    const [bookingCount, revenue, statusGroups, packages, users, allBookings, allSchedules] = await Promise.all([
      prisma.bookings.count(),
      prisma.bookings.aggregate({ _sum: { total_price: true }, where: { booking_status: "CONFIRMED" } }),
      prisma.bookings.groupBy({ by: ["booking_status"], _count: { booking_id: true } }),
      prisma.tour_packages.findMany({
        include: { bookings: true, attraction: true },
        orderBy: { package_id: "asc" },
      }),
      prisma.users.count(),
      prisma.bookings.findMany({
        select: {
          booking_date: true,
          booking_status: true,
          total_price: true,
          schedule: {
            select: {
              date: true,
            },
          },
        },
      }),
      prisma.package_schedules.findMany({
        select: {
          date: true,
        },
      }),
    ]);

    const topPackages = packages
      .map((item) => ({
        package_id: item.package_id,
        package_name: item.package_name,
        attraction_name: item.attraction?.attraction_name,
        bookings: item.bookings.length,
      }))
      .sort((a, b) => b.bookings - a.bookings)
      .slice(0, 5);

    const monthNames = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    const monthlyData: { [key: string]: { monthKey: string; monthLabel: string; bookingCount: number; confirmedRevenue: number } } = {};

    // Populate months from all schedules first
    for (const s of allSchedules) {
      if (!s.date) continue;
      const date = new Date(s.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
      const monthLabel = `${monthNames[month]} ${year + 543}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          monthKey,
          monthLabel,
          bookingCount: 0,
          confirmedRevenue: 0,
        };
      }
    }

    // Populate and accumulate bookings
    for (const b of allBookings) {
      const date = b.schedule?.date ? new Date(b.schedule.date) : new Date(b.booking_date);
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
      const monthLabel = `${monthNames[month]} ${year + 543}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          monthKey,
          monthLabel,
          bookingCount: 0,
          confirmedRevenue: 0,
        };
      }
      monthlyData[monthKey].bookingCount += 1;
      if (b.booking_status === "CONFIRMED") {
        monthlyData[monthKey].confirmedRevenue += Number(b.total_price);
      }
    }

    const monthlyReports = Object.values(monthlyData)
      .sort((a, b) => b.monthKey.localeCompare(a.monthKey));

    return {
      bookingCount,
      confirmedRevenue: Number(revenue._sum.total_price || 0),
      users,
      statusGroups,
      topPackages,
      monthlyReports,
    };
  }
}
