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
exports.AdminService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../utils/prisma"));
class AdminService {
    listBookings() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.bookings.findMany({
                include: {
                    user: true,
                    package: { include: { attraction: true } },
                    schedule: true,
                    payments: true,
                },
                orderBy: { booking_date: "desc" },
            });
        });
    }
    updateBookingStatus(booking_id, booking_status) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.bookings.update({
                where: { booking_id },
                data: { booking_status, status: booking_status },
            });
        });
    }
    verifyPayment(payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                const payment = yield tx.payments.update({
                    where: { payment_id },
                    data: { payment_status: "VERIFIED", paid_at: new Date() },
                });
                yield tx.bookings.update({
                    where: { booking_id: payment.booking_id },
                    data: { booking_status: "CONFIRMED", status: "CONFIRMED" },
                });
                return payment;
            }));
        });
    }
    rejectPayment(payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.payments.update({ where: { payment_id }, data: { payment_status: "REJECTED" } });
        });
    }
    listAttractions() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tourist_attractions.findMany({
                include: {
                    category: true,
                    images: { orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }] },
                    _count: { select: { tour_packages: true } },
                },
                orderBy: [{ is_popular: "desc" }, { attraction_id: "asc" }],
            });
        });
    }
    createAttraction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tourist_attractions.create({
                data: {
                    attraction_name: data.attraction_name,
                    location: data.location,
                    district: data.district,
                    subdistrict: data.subdistrict,
                    description: data.description,
                    opening_time: data.opening_time,
                    category_id: data.category_id ? Number(data.category_id) : undefined,
                    map_url: data.map_url,
                    latitude: data.latitude ? new client_1.Prisma.Decimal(data.latitude) : undefined,
                    longitude: data.longitude ? new client_1.Prisma.Decimal(data.longitude) : undefined,
                    address: data.address,
                    is_popular: Boolean(data.is_popular),
                },
                include: { category: true, images: true },
            });
        });
    }
    updateAttraction(attraction_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tourist_attractions.update({
                where: { attraction_id },
                data: {
                    attraction_name: data.attraction_name,
                    location: data.location,
                    district: data.district,
                    subdistrict: data.subdistrict,
                    description: data.description,
                    opening_time: data.opening_time,
                    category_id: data.category_id === "" || data.category_id === undefined ? undefined : Number(data.category_id),
                    map_url: data.map_url,
                    latitude: data.latitude === "" || data.latitude === undefined ? undefined : new client_1.Prisma.Decimal(data.latitude),
                    longitude: data.longitude === "" || data.longitude === undefined ? undefined : new client_1.Prisma.Decimal(data.longitude),
                    address: data.address,
                    is_popular: data.is_popular === undefined ? undefined : Boolean(data.is_popular),
                },
                include: { category: true, images: true },
            });
        });
    }
    deleteAttraction(attraction_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const packageCount = yield prisma_1.default.tour_packages.count({ where: { attraction_id } });
            if (packageCount > 0) {
                const error = new Error("ATTRACTION_HAS_PACKAGES");
                error.status = 409;
                throw error;
            }
            yield prisma_1.default.attraction_images.deleteMany({ where: { attraction_id } });
            yield prisma_1.default.reviews.deleteMany({ where: { attraction_id } });
            yield prisma_1.default.favorites.deleteMany({ where: { attraction_id } });
            return prisma_1.default.tourist_attractions.delete({ where: { attraction_id } });
        });
    }
    addAttractionImage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.is_cover) {
                yield prisma_1.default.attraction_images.updateMany({
                    where: { attraction_id: data.attraction_id },
                    data: { is_cover: false },
                });
            }
            return prisma_1.default.attraction_images.create({ data });
        });
    }
    deleteAttractionImage(image_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.attraction_images.delete({ where: { image_id } });
        });
    }
    setCoverImage(image_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield prisma_1.default.attraction_images.findUnique({ where: { image_id } });
            if (!image)
                throw new Error("IMAGE_NOT_FOUND");
            yield prisma_1.default.attraction_images.updateMany({
                where: { attraction_id: image.attraction_id },
                data: { is_cover: false },
            });
            return prisma_1.default.attraction_images.update({ where: { image_id }, data: { is_cover: true } });
        });
    }
    listPackages() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tour_packages.findMany({
                include: {
                    attraction: true,
                    _count: { select: { bookings: true } },
                    schedules: {
                        include: { _count: { select: { bookings: true } } },
                        orderBy: { date: "asc" },
                    },
                },
                orderBy: { package_id: "asc" },
            });
        });
    }
    createPackage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tour_packages.create({
                data: {
                    package_name: data.package_name,
                    description: data.description,
                    price: new client_1.Prisma.Decimal(data.price || 0),
                    duration: data.duration,
                    attraction_id: Number(data.attraction_id),
                },
                include: { attraction: true, schedules: true },
            });
        });
    }
    updatePackage(package_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tour_packages.update({
                where: { package_id },
                data: {
                    package_name: data.package_name,
                    description: data.description,
                    price: data.price === undefined ? undefined : new client_1.Prisma.Decimal(data.price),
                    duration: data.duration,
                    attraction_id: data.attraction_id === undefined ? undefined : Number(data.attraction_id),
                },
                include: { attraction: true, schedules: true },
            });
        });
    }
    deletePackage(package_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookingCount = yield prisma_1.default.bookings.count({ where: { package_id } });
            if (bookingCount > 0) {
                const error = new Error("PACKAGE_HAS_BOOKINGS");
                error.status = 409;
                throw error;
            }
            yield prisma_1.default.package_schedules.deleteMany({ where: { package_id } });
            return prisma_1.default.tour_packages.delete({ where: { package_id } });
        });
    }
    createSchedule(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.package_schedules.create({
                data: {
                    package_id: Number(data.package_id),
                    date: new Date(data.date),
                    capacity: Number(data.capacity),
                    booked_seats: Number(data.booked_seats || 0),
                },
            });
        });
    }
    updateSchedule(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.package_schedules.update({
                where: { id },
                data: {
                    date: data.date ? new Date(data.date) : undefined,
                    capacity: data.capacity === undefined ? undefined : Number(data.capacity),
                    booked_seats: data.booked_seats === undefined ? undefined : Number(data.booked_seats),
                },
            });
        });
    }
    deleteSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookingCount = yield prisma_1.default.bookings.count({ where: { schedule_id: id } });
            if (bookingCount > 0) {
                const error = new Error("SCHEDULE_HAS_BOOKINGS");
                error.status = 409;
                throw error;
            }
            return prisma_1.default.package_schedules.delete({ where: { id } });
        });
    }
    deleteBooking(booking_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                const booking = yield tx.bookings.findUnique({ where: { booking_id } });
                if (!booking) {
                    const error = new Error("BOOKING_NOT_FOUND");
                    error.status = 404;
                    throw error;
                }
                yield tx.payments.deleteMany({ where: { booking_id } });
                if (booking.schedule_id && booking.booking_status !== "CANCELLED") {
                    const schedule = yield tx.package_schedules.findUnique({ where: { id: booking.schedule_id } });
                    if (schedule) {
                        yield tx.package_schedules.update({
                            where: { id: booking.schedule_id },
                            data: { booked_seats: Math.max(0, schedule.booked_seats - booking.people_count) },
                        });
                    }
                }
                return tx.bookings.delete({ where: { booking_id } });
            }));
        });
    }
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma_1.default.users.findMany({
                select: {
                    user_id: true,
                    username: true,
                    email: true,
                    user_type: true,
                    is_active: true,
                    created_at: true,
                    booking_profile: {
                        select: {
                            first_name: true,
                            last_name: true,
                            phone: true,
                        },
                    },
                },
                orderBy: { user_id: "asc" },
            });
            return users.map((user) => {
                var _a, _b, _c, _d, _e, _f;
                return ({
                    user_id: user.user_id,
                    username: user.username,
                    name: (_b = (_a = user.booking_profile) === null || _a === void 0 ? void 0 : _a.first_name) !== null && _b !== void 0 ? _b : null,
                    lastname: (_d = (_c = user.booking_profile) === null || _c === void 0 ? void 0 : _c.last_name) !== null && _d !== void 0 ? _d : null,
                    email: user.email,
                    phone: (_f = (_e = user.booking_profile) === null || _e === void 0 ? void 0 : _e.phone) !== null && _f !== void 0 ? _f : null,
                    user_type: user.user_type,
                    is_active: user.is_active,
                    created_at: user.created_at,
                });
            });
        });
    }
    updateUser(user_id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const user = yield prisma_1.default.users.update({
                where: { user_id },
                data: {
                    user_type: data.user_type === undefined ? undefined : Number(data.user_type),
                    is_active: data.is_active === undefined ? undefined : Boolean(data.is_active),
                },
                select: {
                    user_id: true,
                    username: true,
                    email: true,
                    user_type: true,
                    is_active: true,
                    booking_profile: {
                        select: {
                            first_name: true,
                            last_name: true,
                            phone: true,
                        },
                    },
                },
            });
            return {
                user_id: user.user_id,
                username: user.username,
                name: (_b = (_a = user.booking_profile) === null || _a === void 0 ? void 0 : _a.first_name) !== null && _b !== void 0 ? _b : null,
                lastname: (_d = (_c = user.booking_profile) === null || _c === void 0 ? void 0 : _c.last_name) !== null && _d !== void 0 ? _d : null,
                email: user.email,
                phone: (_f = (_e = user.booking_profile) === null || _e === void 0 ? void 0 : _e.phone) !== null && _f !== void 0 ? _f : null,
                user_type: user.user_type,
                is_active: user.is_active,
            };
        });
    }
    report() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const [bookingCount, revenue, statusGroups, packages, users, allBookings, allSchedules] = yield Promise.all([
                prisma_1.default.bookings.count(),
                prisma_1.default.bookings.aggregate({ _sum: { total_price: true }, where: { booking_status: "CONFIRMED" } }),
                prisma_1.default.bookings.groupBy({ by: ["booking_status"], _count: { booking_id: true } }),
                prisma_1.default.tour_packages.findMany({
                    include: { bookings: true, attraction: true },
                    orderBy: { package_id: "asc" },
                }),
                prisma_1.default.users.count(),
                prisma_1.default.bookings.findMany({
                    select: {
                        booking_date: true,
                        booking_status: true,
                        total_price: true,
                        schedule: {
                            select: {
                                date: true,
                            },
                        },
                    },
                }),
                prisma_1.default.package_schedules.findMany({
                    select: {
                        date: true,
                    },
                }),
            ]);
            const topPackages = packages
                .map((item) => {
                var _a;
                return ({
                    package_id: item.package_id,
                    package_name: item.package_name,
                    attraction_name: (_a = item.attraction) === null || _a === void 0 ? void 0 : _a.attraction_name,
                    bookings: item.bookings.length,
                });
            })
                .sort((a, b) => b.bookings - a.bookings)
                .slice(0, 5);
            const monthNames = [
                "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
                "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
            ];
            const monthlyData = {};
            // Populate months from all schedules first
            for (const s of allSchedules) {
                if (!s.date)
                    continue;
                const date = new Date(s.date);
                const year = date.getFullYear();
                const month = date.getMonth();
                const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
                const monthLabel = `${monthNames[month]} ${year + 543}`;
                if (!monthlyData[monthKey]) {
                    monthlyData[monthKey] = {
                        monthKey,
                        monthLabel,
                        bookingCount: 0,
                        confirmedRevenue: 0,
                    };
                }
            }
            // Populate and accumulate bookings
            for (const b of allBookings) {
                const date = ((_a = b.schedule) === null || _a === void 0 ? void 0 : _a.date) ? new Date(b.schedule.date) : new Date(b.booking_date);
                const year = date.getFullYear();
                const month = date.getMonth();
                const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
                const monthLabel = `${monthNames[month]} ${year + 543}`;
                if (!monthlyData[monthKey]) {
                    monthlyData[monthKey] = {
                        monthKey,
                        monthLabel,
                        bookingCount: 0,
                        confirmedRevenue: 0,
                    };
                }
                monthlyData[monthKey].bookingCount += 1;
                if (b.booking_status === "CONFIRMED") {
                    monthlyData[monthKey].confirmedRevenue += Number(b.total_price);
                }
            }
            const monthlyReports = Object.values(monthlyData)
                .sort((a, b) => b.monthKey.localeCompare(a.monthKey));
            return {
                bookingCount,
                confirmedRevenue: Number(revenue._sum.total_price || 0),
                users,
                statusGroups,
                topPackages,
                monthlyReports,
            };
        });
    }
}
exports.AdminService = AdminService;
