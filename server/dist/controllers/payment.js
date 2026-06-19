"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const payment_service_1 = require("../services/payment.service");
const upload_1 = __importDefault(require("../middlewares/upload"));
class PaymentController {
    constructor() {
        this.paymentService = new payment_service_1.PaymentService();
        this.uploadSlip = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.query.upload_type = "slip";
            upload_1.default.single("slip")(req, res, (err) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                try {
                    if (err)
                        return res.status(400).json({ message: err.message });
                    const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                    const booking_id = Number(req.body.booking_id);
                    const payment_method = req.body.payment_method || "PROMPTPAY";
                    if (!user_id)
                        return res.status(401).json({ message: "Unauthorized" });
                    if (!booking_id)
                        return res.status(400).json({ message: "Booking id is required" });
                    if (!req.file)
                        return res.status(400).json({ message: "Slip image is required" });
                    const payment = yield this.paymentService.uploadSlip({
                        booking_id,
                        user_id,
                        payment_method,
                        slip_url: `/uploads/slips/${req.file.filename}`,
                    });
                    return res.status(201).json({ message: "Payment slip uploaded", data: payment });
                }
                catch (error) {
                    if (error.message === "BOOKING_NOT_FOUND") {
                        return res.status(404).json({ message: "Booking not found" });
                    }
                    if (error.message === "BOOKING_CANCELLED") {
                        return res.status(409).json({ message: "Cancelled booking cannot be paid" });
                    }
                    next(error);
                }
            }));
        });
        this.getByBooking = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const booking_id = Number(req.params.bookingId);
                if (!user_id)
                    return res.status(401).json({ message: "Unauthorized" });
                if (!booking_id)
                    return res.status(400).json({ message: "Invalid booking id" });
                const payment = yield this.paymentService.getByBooking(booking_id, user_id);
                return res.json(payment);
            }
            catch (error) {
                if (error.message === "BOOKING_NOT_FOUND") {
                    return res.status(404).json({ message: "Booking not found" });
                }
                next(error);
            }
        });
    }
}
exports.PaymentController = PaymentController;
