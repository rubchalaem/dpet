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
exports.PaymentService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class PaymentService {
    uploadSlip(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const booking = yield prisma_1.default.bookings.findFirst({
                where: {
                    booking_id: data.booking_id,
                    user_id: data.user_id,
                },
                include: { payments: true },
            });
            if (!booking)
                throw new Error("BOOKING_NOT_FOUND");
            if (booking.booking_status === "CANCELLED")
                throw new Error("BOOKING_CANCELLED");
            const existing = booking.payments[0];
            if (existing) {
                return prisma_1.default.payments.update({
                    where: { payment_id: existing.payment_id },
                    data: {
                        payment_method: data.payment_method,
                        payment_status: "PENDING",
                        amount: booking.total_price,
                        slip_url: data.slip_url,
                        payment_date: new Date(),
                    },
                });
            }
            return prisma_1.default.payments.create({
                data: {
                    booking_id: data.booking_id,
                    payment_method: data.payment_method,
                    payment_status: "PENDING",
                    amount: booking.total_price,
                    slip_url: data.slip_url,
                },
            });
        });
    }
    getByBooking(booking_id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const booking = yield prisma_1.default.bookings.findFirst({
                where: { booking_id, user_id },
                include: { payments: true },
            });
            if (!booking)
                throw new Error("BOOKING_NOT_FOUND");
            return (_a = booking.payments[0]) !== null && _a !== void 0 ? _a : null;
        });
    }
}
exports.PaymentService = PaymentService;
