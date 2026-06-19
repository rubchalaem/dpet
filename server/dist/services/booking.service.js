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
exports.BookingService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../utils/prisma"));
class BookingService {
    /**
     * Create a new booking
     */
    createBooking(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                const tourPackage = yield tx.tour_packages.findUnique({
                    where: { package_id: data.package_id },
                });
                if (!tourPackage) {
                    throw new Error("PACKAGE_NOT_FOUND");
                }
                const updatedRows = yield tx.$executeRaw `
        UPDATE package_schedules
        SET booked_seats = booked_seats + ${data.people_count}
        WHERE id = ${data.schedule_id}
          AND package_id = ${data.package_id}
          AND booked_seats + ${data.people_count} <= capacity
      `;
                if (Number(updatedRows) !== 1) {
                    throw new Error("INSUFFICIENT_SEATS");
                }
                const totalPrice = new client_1.Prisma.Decimal(tourPackage.price).mul(data.people_count);
                const booking = yield tx.bookings.create({
                    data: {
                        user_id: data.user_id,
                        package_id: data.package_id,
                        schedule_id: data.schedule_id,
                        people_count: data.people_count,
                        total_price: totalPrice,
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        phone: data.phone,
                        id_card: data.id_card,
                        current_address: data.current_address,
                        identity_address: data.identity_address,
                        current_province: data.current_province,
                        current_district: data.current_district,
                        current_subdistrict: data.current_subdistrict,
                        current_zipcode: data.current_zipcode,
                        current_address_detail: data.current_address_detail,
                        identity_province: data.identity_province,
                        identity_district: data.identity_district,
                        identity_subdistrict: data.identity_subdistrict,
                        identity_zipcode: data.identity_zipcode,
                        identity_address_detail: data.identity_address_detail,
                        status: "PENDING",
                        booking_status: "PENDING",
                    },
                    include: {
                        package: { include: { attraction: true } },
                        schedule: true,
                        payments: true,
                    },
                });
                yield tx.user_booking_profiles.upsert({
                    where: { user_id: data.user_id },
                    create: {
                        user_id: data.user_id,
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        phone: data.phone,
                        id_card: data.id_card,
                        current_province: data.current_province,
                        current_district: data.current_district,
                        current_subdistrict: data.current_subdistrict,
                        current_zipcode: data.current_zipcode,
                        current_address_detail: data.current_address_detail,
                        identity_province: data.identity_province,
                        identity_district: data.identity_district,
                        identity_subdistrict: data.identity_subdistrict,
                        identity_zipcode: data.identity_zipcode,
                        identity_address_detail: data.identity_address_detail,
                    },
                    update: {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        phone: data.phone,
                        id_card: data.id_card,
                        current_province: data.current_province,
                        current_district: data.current_district,
                        current_subdistrict: data.current_subdistrict,
                        current_zipcode: data.current_zipcode,
                        current_address_detail: data.current_address_detail,
                        identity_province: data.identity_province,
                        identity_district: data.identity_district,
                        identity_subdistrict: data.identity_subdistrict,
                        identity_zipcode: data.identity_zipcode,
                        identity_address_detail: data.identity_address_detail,
                    },
                });
                return booking;
            }));
        });
    }
    getBookingDefaults(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.user_booking_profiles.findUnique({
                where: { user_id },
            });
        });
    }
    /**
     * Get all bookings for a user
     */
    getMyBookings(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.bookings.findMany({
                where: { user_id },
                include: {
                    package: {
                        include: {
                            attraction: {
                                include: { images: true }
                            }
                        }
                    },
                    schedule: true,
                    payments: true,
                },
                orderBy: { booking_date: "desc" },
            });
        });
    }
    cancelBooking(booking_id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                const booking = yield tx.bookings.findFirst({
                    where: { booking_id, user_id },
                });
                if (!booking)
                    throw new Error("BOOKING_NOT_FOUND");
                if (booking.booking_status !== "PENDING")
                    throw new Error("CANNOT_CANCEL");
                const updated = yield tx.bookings.update({
                    where: { booking_id },
                    data: {
                        booking_status: "CANCELLED",
                        status: "CANCELLED",
                    },
                    include: {
                        package: { include: { attraction: true } },
                        schedule: true,
                        payments: true,
                    },
                });
                if (booking.schedule_id) {
                    yield tx.package_schedules.update({
                        where: { id: booking.schedule_id },
                        data: { booked_seats: { decrement: booking.people_count } },
                    });
                }
                return updated;
            }));
        });
    }
}
exports.BookingService = BookingService;
