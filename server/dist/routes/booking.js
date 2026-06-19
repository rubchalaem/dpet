"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = require("express");
const booking_1 = require("../controllers/booking");
const auth_1 = require("../middlewares/auth");
class BookingRoutes {
    constructor() {
        this.path = "/bookings";
        this.legacyPath = "/booking";
        this.router = (0, express_1.Router)();
        this.bookingController = new booking_1.BookingController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(this.path, auth_1.authenticateToken, this.bookingController.createBooking);
        this.router.get(`${this.path}/me`, auth_1.authenticateToken, this.bookingController.getMyBookings);
        this.router.get(`${this.path}/defaults/me`, auth_1.authenticateToken, this.bookingController.getMyBookingDefaults);
        this.router.patch(`${this.path}/:id/cancel`, auth_1.authenticateToken, this.bookingController.cancelBooking);
        this.router.post(`${this.legacyPath}/`, auth_1.authenticateToken, this.bookingController.createBooking);
        this.router.get(`${this.legacyPath}/me`, auth_1.authenticateToken, this.bookingController.getMyBookings);
    }
}
exports.BookingRoutes = BookingRoutes;
exports.default = new BookingRoutes().router;
