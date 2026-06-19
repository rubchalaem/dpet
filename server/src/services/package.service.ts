import prisma from "../utils/prisma";

export class PackageService {
  public async listPackages() {
    return prisma.tour_packages.findMany({
      include: {
        attraction: {
          include: {
            images: {
              orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }],
            },
          },
        },
        schedules: {
          where: { date: { gte: new Date(new Date().toDateString()) } },
          orderBy: { date: "asc" },
        },
        _count: {
          select: { bookings: true },
        },
      },
      orderBy: [{ bookings: { _count: "desc" } }, { package_id: "asc" }],
    });
  }

  public async getPackage(packageId: number) {
    return prisma.tour_packages.findUnique({
      where: { package_id: packageId },
      include: {
        attraction: {
          include: {
            images: {
              orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }],
            },
          },
        },
        schedules: {
          orderBy: { date: "asc" },
        },
        _count: {
          select: { bookings: true },
        },
      },
    });
  }

  public async getSchedules(packageId: number) {
    return prisma.package_schedules.findMany({
      where: {
        package_id: packageId,
        date: { gte: new Date(new Date().toDateString()) },
      },
      orderBy: { date: "asc" },
    });
  }
}
