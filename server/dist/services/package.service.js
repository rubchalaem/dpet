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
exports.PackageService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class PackageService {
    listPackages() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tour_packages.findMany({
                include: {
                    attraction: {
                        include: {
                            images: {
                                orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }],
                            },
                        },
                    },
                    schedules: {
                        where: { date: { gte: new Date(new Date().toDateString()) } },
                        orderBy: { date: "asc" },
                    },
                    _count: {
                        select: { bookings: true },
                    },
                },
                orderBy: [{ bookings: { _count: "desc" } }, { package_id: "asc" }],
            });
        });
    }
    getPackage(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tour_packages.findUnique({
                where: { package_id: packageId },
                include: {
                    attraction: {
                        include: {
                            images: {
                                orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }],
                            },
                        },
                    },
                    schedules: {
                        orderBy: { date: "asc" },
                    },
                    _count: {
                        select: { bookings: true },
                    },
                },
            });
        });
    }
    getSchedules(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.package_schedules.findMany({
                where: {
                    package_id: packageId,
                    date: { gte: new Date(new Date().toDateString()) },
                },
                orderBy: { date: "asc" },
            });
        });
    }
}
exports.PackageService = PackageService;
