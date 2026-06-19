"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const payment_1 = require("../controllers/payment");
const auth_1 = require("../middlewares/auth");
class PaymentRoutes {
    constructor() {
        this.path = "/payments";
        this.router = (0, express_1.Router)();
        this.paymentController = new payment_1.PaymentController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/upload-slip`, auth_1.authenticateToken, this.paymentController.uploadSlip);
        this.router.get(`${this.path}/:bookingId`, auth_1.authenticateToken, this.paymentController.getByBooking);
    }
}
exports.PaymentRoutes = PaymentRoutes;
exports.default = new PaymentRoutes().router;
