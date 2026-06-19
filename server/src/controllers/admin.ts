import { NextFunction, Request, Response } from "express";
import { AdminService } from "../services/admin.service";
import upload from "../middlewares/upload";

export class AdminController {
  private adminService = new AdminService();

  public listBookings = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.listBookings());
    } catch (error) {
      next(error);
    }
  };

  public updateBookingStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.updateBookingStatus(Number(req.params.id), req.body.booking_status));
    } catch (error) {
      next(error);
    }
  };

  public verifyPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payment = await this.adminService.verifyPayment(Number(req.params.id));
      return res.json({ message: "Payment verified", data: payment });
    } catch (error) {
      next(error);
    }
  };

  public rejectPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payment = await this.adminService.rejectPayment(Number(req.params.id));
      return res.json({ message: "Payment rejected", data: payment });
    } catch (error) {
      next(error);
    }
  };

  public listAttractions = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.listAttractions());
    } catch (error) {
      next(error);
    }
  };

  public createAttraction = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json(await this.adminService.createAttraction(req.body));
    } catch (error) {
      next(error);
    }
  };

  public updateAttraction = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.updateAttraction(Number(req.params.id), req.body));
    } catch (error) {
      next(error);
    }
  };

  public deleteAttraction = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.adminService.deleteAttraction(Number(req.params.id));
      return res.json({ message: "Attraction deleted" });
    } catch (error) {
      if ((error as any).message === "ATTRACTION_HAS_PACKAGES") {
        return res.status(409).json({ message: "Attraction has packages. Delete related packages first." });
      }
      next(error);
    }
  };

  public uploadAttractionImage = async (req: Request, res: Response, next: NextFunction) => {
    (req.query as any).upload_type = "attraction";
    upload.single("image")(req, res, async (err) => {
      try {
        if (err) return res.status(400).json({ message: err.message });
        if (!req.file) return res.status(400).json({ message: "Image is required" });
        const image = await this.adminService.addAttractionImage({
          attraction_id: Number(req.params.id),
          image_url: req.file.path,
          caption: req.body.caption,
          is_cover: req.body.is_cover === "true" || req.body.is_cover === true,
          sort_order: Number(req.body.sort_order || 0),
        });
        return res.status(201).json(image);
      } catch (error) {
        next(error);
      }
    });
  };

  public deleteAttractionImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.adminService.deleteAttractionImage(Number(req.params.imageId));
      return res.json({ message: "Image deleted" });
    } catch (error) {
      next(error);
    }
  };

  public setCoverImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.setCoverImage(Number(req.params.imageId)));
    } catch (error) {
      next(error);
    }
  };

  public listPackages = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.listPackages());
    } catch (error) {
      next(error);
    }
  };

  public createPackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json(await this.adminService.createPackage(req.body));
    } catch (error) {
      next(error);
    }
  };

  public updatePackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.updatePackage(Number(req.params.id), req.body));
    } catch (error) {
      next(error);
    }
  };

  public deletePackage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.adminService.deletePackage(Number(req.params.id));
      return res.json({ message: "Package deleted" });
    } catch (error) {
      if ((error as any).message === "PACKAGE_HAS_BOOKINGS") {
        return res.status(409).json({ message: "Package has bookings and cannot be deleted." });
      }
      next(error);
    }
  };

  public createSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json(await this.adminService.createSchedule(req.body));
    } catch (error) {
      next(error);
    }
  };

  public updateSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.updateSchedule(Number(req.params.id), req.body));
    } catch (error) {
      next(error);
    }
  };

  public deleteSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.adminService.deleteSchedule(Number(req.params.id));
      return res.json({ message: "Schedule deleted" });
    } catch (error) {
      if ((error as any).message === "SCHEDULE_HAS_BOOKINGS") {
        return res.status(409).json({ message: "Schedule has bookings and cannot be deleted." });
      }
      next(error);
    }
  };

  public deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.adminService.deleteBooking(Number(req.params.id));
      return res.json({ message: "Booking deleted" });
    } catch (error) {
      if ((error as any).message === "BOOKING_NOT_FOUND") {
        return res.status(404).json({ message: "Booking not found" });
      }
      next(error);
    }
  };

  public listUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.listUsers());
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.updateUser(Number(req.params.id), req.body));
    } catch (error) {
      next(error);
    }
  };

  public report = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.adminService.report());
    } catch (error) {
      next(error);
    }
  };
}
