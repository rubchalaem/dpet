"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRoutes = void 0;
const express_1 = require("express");
const package_1 = require("../controllers/package");
class PackageRoutes {
    constructor() {
        this.path = "/packages";
        this.router = (0, express_1.Router)();
        this.packageController = new package_1.PackageController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.packageController.listPackages);
        this.router.get(`${this.path}/:id`, this.packageController.getPackage);
        this.router.get(`${this.path}/:id/schedules`, this.packageController.getSchedules);
    }
}
exports.PackageRoutes = PackageRoutes;
exports.default = new PackageRoutes().router;
