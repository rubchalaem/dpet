import { Router } from "express";
import { BookingController } from "../controllers/booking";
import { authenticateToken } from "../middlewares/auth";

export class BookingRoutes {
  public path = "/bookings";
  public legacyPath = "/booking";
  public router = Router();
  private bookingController = new BookingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, authenticateToken, this.bookingController.createBooking);
    this.router.get(`${this.path}/me`, authenticateToken, this.bookingController.getMyBookings);
    this.router.get(`${this.path}/defaults/me`, authenticateToken, this.bookingController.getMyBookingDefaults);
    this.router.patch(`${this.path}/:id/cancel`, authenticateToken, this.bookingController.cancelBooking);

    this.router.post(`${this.legacyPath}/`, authenticateToken, this.bookingController.createBooking);
    this.router.get(`${this.legacyPath}/me`, authenticateToken, this.bookingController.getMyBookings);
  }
}

export default new BookingRoutes().router;
