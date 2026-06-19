import { Router } from "express";
import { PaymentController } from "../controllers/payment";
import { authenticateToken } from "../middlewares/auth";

export class PaymentRoutes {
  public path = "/payments";
  public router = Router();
  private paymentController = new PaymentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/upload-slip`, authenticateToken, this.paymentController.uploadSlip);
    this.router.get(`${this.path}/:bookingId`, authenticateToken, this.paymentController.getByBooking);
  }
}

export default new PaymentRoutes().router;
