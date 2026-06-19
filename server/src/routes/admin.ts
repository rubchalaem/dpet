import { Router } from "express";
import { AdminController } from "../controllers/admin";
import { authenticateToken, requireAdmin } from "../middlewares/auth";

export class AdminRoutes {
  public path = "/admin";
  public router = Router();
  private adminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(this.path, authenticateToken, requireAdmin);
    this.router.get(`${this.path}/bookings`, this.adminController.listBookings);
    this.router.patch(`${this.path}/bookings/:id/status`, this.adminController.updateBookingStatus);
    this.router.delete(`${this.path}/bookings/:id`, this.adminController.deleteBooking);
    this.router.patch(`${this.path}/payments/:id/verify`, this.adminController.verifyPayment);
    this.router.patch(`${this.path}/payments/:id/reject`, this.adminController.rejectPayment);
    this.router.get(`${this.path}/attractions`, this.adminController.listAttractions);
    this.router.post(`${this.path}/attractions`, this.adminController.createAttraction);
    this.router.patch(`${this.path}/attractions/:id`, this.adminController.updateAttraction);
    this.router.delete(`${this.path}/attractions/:id`, this.adminController.deleteAttraction);
    this.router.post(`${this.path}/attractions/:id/images`, this.adminController.uploadAttractionImage);
    this.router.delete(`${this.path}/attraction-images/:imageId`, this.adminController.deleteAttractionImage);
    this.router.patch(`${this.path}/attraction-images/:imageId/cover`, this.adminController.setCoverImage);
    this.router.get(`${this.path}/packages`, this.adminController.listPackages);
    this.router.post(`${this.path}/packages`, this.adminController.createPackage);
    this.router.patch(`${this.path}/packages/:id`, this.adminController.updatePackage);
    this.router.delete(`${this.path}/packages/:id`, this.adminController.deletePackage);
    this.router.post(`${this.path}/schedules`, this.adminController.createSchedule);
    this.router.patch(`${this.path}/schedules/:id`, this.adminController.updateSchedule);
    this.router.delete(`${this.path}/schedules/:id`, this.adminController.deleteSchedule);
    this.router.get(`${this.path}/users`, this.adminController.listUsers);
    this.router.patch(`${this.path}/users/:id`, this.adminController.updateUser);
    this.router.get(`${this.path}/reports`, this.adminController.report);
  }
}

export default new AdminRoutes().router;
