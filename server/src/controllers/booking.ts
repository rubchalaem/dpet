import { Request, Response, NextFunction } from "express";
import { BookingService } from "../services/booking.service";

export class BookingController {
  private bookingService = new BookingService();

  public createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      const {
        package_id,
        schedule_id,
        people_count,
        first_name,
        last_name,
        email,
        phone,
        id_card,
        current_address,
        identity_address,
        current_province,
        current_district,
        current_subdistrict,
        current_zipcode,
        current_address_detail,
        identity_province,
        identity_district,
        identity_subdistrict,
        identity_zipcode,
        identity_address_detail,
      } = req.body;

      if (!user_id) return res.status(401).json({ message: "Please login before booking" });
      if (!package_id || !schedule_id || !people_count || Number(people_count) < 1) {
        return res.status(400).json({ message: "Package, schedule and people count are required" });
      }
      if (
        typeof first_name !== "string" ||
        !first_name.trim() ||
        typeof last_name !== "string" ||
        !last_name.trim()
      ) {
        return res.status(400).json({ message: "กรุณากรอกชื่อและนามสกุลผู้จอง" });
      }
      if (
        typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      ) {
        return res.status(400).json({ message: "กรุณากรอกอีเมลให้ถูกต้อง" });
      }
      if (typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
        return res.status(400).json({
          message: "กรุณากรอกเบอร์โทรเป็นตัวเลข 10 หลัก",
        });
      }
      if (typeof id_card !== "string" || !/^\d{13}$/.test(id_card)) {
        return res.status(400).json({
          message: "กรุณากรอกเลขบัตรประชาชนเป็นตัวเลข 13 หลัก",
        });
      }

      const booking = await this.bookingService.createBooking({
        user_id,
        package_id: Number(package_id),
        schedule_id: Number(schedule_id),
        people_count: Number(people_count),
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        email: email.trim(),
        phone,
        id_card,
        current_address,
        identity_address,
        current_province,
        current_district,
        current_subdistrict,
        current_zipcode,
        current_address_detail,
        identity_province,
        identity_district,
        identity_subdistrict,
        identity_zipcode,
        identity_address_detail,
      });

      return res.status(201).json({ message: "Booking created", data: booking });
    } catch (error: any) {
      if (error.message === "INSUFFICIENT_SEATS") {
        return res.status(409).json({ message: "Not enough seats available" });
      }
      if (error.message === "PACKAGE_NOT_FOUND") {
        return res.status(404).json({ message: "Package not found" });
      }
      next(error);
    }
  };

  public getMyBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      if (!user_id) return res.status(401).json({ message: "Unauthorized" });

      const bookings = await this.bookingService.getMyBookings(user_id);
      return res.json(bookings);
    } catch (error) {
      next(error);
    }
  };

  public getMyBookingDefaults = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      if (!user_id) return res.status(401).json({ message: "Unauthorized" });

      const defaults = await this.bookingService.getBookingDefaults(user_id);
      return res.json(defaults);
    } catch (error) {
      next(error);
    }
  };

  public cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      const booking_id = Number(req.params.id);
      if (!user_id) return res.status(401).json({ message: "Unauthorized" });
      if (!booking_id) return res.status(400).json({ message: "Invalid booking id" });

      const booking = await this.bookingService.cancelBooking(booking_id, user_id);
      return res.json({ message: "Booking cancelled", data: booking });
    } catch (error: any) {
      if (error.message === "BOOKING_NOT_FOUND") {
        return res.status(404).json({ message: "Booking not found" });
      }
      if (error.message === "CANNOT_CANCEL") {
        return res.status(409).json({ message: "This booking cannot be cancelled" });
      }
      next(error);
    }
  };
}
