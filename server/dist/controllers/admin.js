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
exports.AdminController = void 0;
const admin_service_1 = require("../services/admin.service");
const upload_1 = __importDefault(require("../middlewares/upload"));
class AdminController {
    constructor() {
        this.adminService = new admin_service_1.AdminService();
        this.listBookings = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.listBookings());
            }
            catch (error) {
                next(error);
            }
        });
        this.updateBookingStatus = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.updateBookingStatus(Number(req.params.id), req.body.booking_status));
            }
            catch (error) {
                next(error);
            }
        });
        this.verifyPayment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield this.adminService.verifyPayment(Number(req.params.id));
                return res.json({ message: "Payment verified", data: payment });
            }
            catch (error) {
                next(error);
            }
        });
        this.rejectPayment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield this.adminService.rejectPayment(Number(req.params.id));
                return res.json({ message: "Payment rejected", data: payment });
            }
            catch (error) {
                next(error);
            }
        });
        this.listAttractions = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.listAttractions());
            }
            catch (error) {
                next(error);
            }
        });
        this.createAttraction = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json(yield this.adminService.createAttraction(req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.updateAttraction = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.updateAttraction(Number(req.params.id), req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteAttraction = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminService.deleteAttraction(Number(req.params.id));
                return res.json({ message: "Attraction deleted" });
            }
            catch (error) {
                if (error.message === "ATTRACTION_HAS_PACKAGES") {
                    return res.status(409).json({ message: "Attraction has packages. Delete related packages first." });
                }
                next(error);
            }
        });
        this.uploadAttractionImage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.query.upload_type = "attraction";
            upload_1.default.single("image")(req, res, (err) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (err)
                        return res.status(400).json({ message: err.message });
                    if (!req.file)
                        return res.status(400).json({ message: "Image is required" });
                    const image = yield this.adminService.addAttractionImage({
                        attraction_id: Number(req.params.id),
                        image_url: `/uploads/attractions/${req.file.filename}`,
                        caption: req.body.caption,
                        is_cover: req.body.is_cover === "true" || req.body.is_cover === true,
                        sort_order: Number(req.body.sort_order || 0),
                    });
                    return res.status(201).json(image);
                }
                catch (error) {
                    next(error);
                }
            }));
        });
        this.deleteAttractionImage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminService.deleteAttractionImage(Number(req.params.imageId));
                return res.json({ message: "Image deleted" });
            }
            catch (error) {
                next(error);
            }
        });
        this.setCoverImage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.setCoverImage(Number(req.params.imageId)));
            }
            catch (error) {
                next(error);
            }
        });
        this.listPackages = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.listPackages());
            }
            catch (error) {
                next(error);
            }
        });
        this.createPackage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json(yield this.adminService.createPackage(req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.updatePackage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.updatePackage(Number(req.params.id), req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.deletePackage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminService.deletePackage(Number(req.params.id));
                return res.json({ message: "Package deleted" });
            }
            catch (error) {
                if (error.message === "PACKAGE_HAS_BOOKINGS") {
                    return res.status(409).json({ message: "Package has bookings and cannot be deleted." });
                }
                next(error);
            }
        });
        this.createSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json(yield this.adminService.createSchedule(req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.updateSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.updateSchedule(Number(req.params.id), req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminService.deleteSchedule(Number(req.params.id));
                return res.json({ message: "Schedule deleted" });
            }
            catch (error) {
                if (error.message === "SCHEDULE_HAS_BOOKINGS") {
                    return res.status(409).json({ message: "Schedule has bookings and cannot be deleted." });
                }
                next(error);
            }
        });
        this.deleteBooking = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminService.deleteBooking(Number(req.params.id));
                return res.json({ message: "Booking deleted" });
            }
            catch (error) {
                if (error.message === "BOOKING_NOT_FOUND") {
                    return res.status(404).json({ message: "Booking not found" });
                }
                next(error);
            }
        });
        this.listUsers = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.listUsers());
            }
            catch (error) {
                next(error);
            }
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.updateUser(Number(req.params.id), req.body));
            }
            catch (error) {
                next(error);
            }
        });
        this.report = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.adminService.report());
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AdminController = AdminController;
