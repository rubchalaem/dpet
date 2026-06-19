import { NextFunction, Request, Response } from "express";
import { PaymentService } from "../services/payment.service";
import upload from "../middlewares/upload";

export class PaymentController {
  private paymentService = new PaymentService();

  public uploadSlip = async (req: Request, res: Response, next: NextFunction) => {
    (req.query as any).upload_type = "slip";
    upload.single("slip")(req, res, async (err) => {
      try {
        if (err) return res.status(400).json({ message: err.message });

        const user_id = (req as any).user?.id;
        const booking_id = Number(req.body.booking_id);
        const payment_method = req.body.payment_method || "PROMPTPAY";

        if (!user_id) return res.status(401).json({ message: "Unauthorized" });
        if (!booking_id) return res.status(400).json({ message: "Booking id is required" });
        if (!req.file) return res.status(400).json({ message: "Slip image is required" });

        const payment = await this.paymentService.uploadSlip({
          booking_id,
          user_id,
          payment_method,
          slip_url: req.file.path,
        });

        return res.status(201).json({ message: "Payment slip uploaded", data: payment });
      } catch (error: any) {
        if (error.message === "BOOKING_NOT_FOUND") {
          return res.status(404).json({ message: "Booking not found" });
        }
        if (error.message === "BOOKING_CANCELLED") {
          return res.status(409).json({ message: "Cancelled booking cannot be paid" });
        }
        next(error);
      }
    });
  };

  public getByBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      const booking_id = Number(req.params.bookingId);

      if (!user_id) return res.status(401).json({ message: "Unauthorized" });
      if (!booking_id) return res.status(400).json({ message: "Invalid booking id" });

      const payment = await this.paymentService.getByBooking(booking_id, user_id);
      return res.json(payment);
    } catch (error: any) {
      if (error.message === "BOOKING_NOT_FOUND") {
        return res.status(404).json({ message: "Booking not found" });
      }
      next(error);
    }
  };
}
