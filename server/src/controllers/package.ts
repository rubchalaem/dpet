import { NextFunction, Request, Response } from "express";
import { PackageService } from "../services/package.service";

const serializePackage = (item: any) => {
  const { _count, ...packageData } = item;
  return {
    ...packageData,
    price: Number(item.price),
    booking_count: _count?.bookings || 0,
    schedules: item.schedules?.map((schedule: any) => ({
      ...schedule,
      available: schedule.capacity - schedule.booked_seats,
    })),
  };
};

export class PackageController {
  private packageService = new PackageService();

  public listPackages = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const packages = await this.packageService.listPackages();
      return res.json(packages.map(serializePackage));
    } catch (error) {
      next(error);
    }
  };

  public getPackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const packageId = Number(req.params.id);
      if (!packageId) return res.status(400).json({ message: "Invalid package id" });

      const item = await this.packageService.getPackage(packageId);
      if (!item) return res.status(404).json({ message: "Package not found" });

      return res.json(serializePackage(item));
    } catch (error) {
      next(error);
    }
  };

  public getSchedules = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const packageId = Number(req.params.id);
      if (!packageId) return res.status(400).json({ message: "Invalid package id" });

      const schedules = await this.packageService.getSchedules(packageId);
      return res.json(
        schedules.map((schedule) => ({
          ...schedule,
          available: schedule.capacity - schedule.booked_seats,
        }))
      );
    } catch (error) {
      next(error);
    }
  };
}
