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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageController = void 0;
const package_service_1 = require("../services/package.service");
const serializePackage = (item) => {
    var _a;
    const { _count } = item, packageData = __rest(item, ["_count"]);
    return Object.assign(Object.assign({}, packageData), { price: Number(item.price), booking_count: (_count === null || _count === void 0 ? void 0 : _count.bookings) || 0, schedules: (_a = item.schedules) === null || _a === void 0 ? void 0 : _a.map((schedule) => (Object.assign(Object.assign({}, schedule), { available: schedule.capacity - schedule.booked_seats }))) });
};
class PackageController {
    constructor() {
        this.packageService = new package_service_1.PackageService();
        this.listPackages = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const packages = yield this.packageService.listPackages();
                return res.json(packages.map(serializePackage));
            }
            catch (error) {
                next(error);
            }
        });
        this.getPackage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const packageId = Number(req.params.id);
                if (!packageId)
                    return res.status(400).json({ message: "Invalid package id" });
                const item = yield this.packageService.getPackage(packageId);
                if (!item)
                    return res.status(404).json({ message: "Package not found" });
                return res.json(serializePackage(item));
            }
            catch (error) {
                next(error);
            }
        });
        this.getSchedules = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const packageId = Number(req.params.id);
                if (!packageId)
                    return res.status(400).json({ message: "Invalid package id" });
                const schedules = yield this.packageService.getSchedules(packageId);
                return res.json(schedules.map((schedule) => (Object.assign(Object.assign({}, schedule), { available: schedule.capacity - schedule.booked_seats }))));
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.PackageController = PackageController;
