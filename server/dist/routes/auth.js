"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const auth_2 = require("../middlewares/auth");
class AuthRoutes {
    constructor() {
        this.path = "/auth";
        this.router = (0, express_1.Router)();
        this.authController = new auth_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/login`, this.authController.loginUser);
        this.router.post(`${this.path}/register`, this.authController.createUser);
        this.router.post(`${this.path}/refresh`, this.authController.refreshToken);
        this.router.get(`${this.path}/google`, this.authController.googleLogin);
        this.router.get(`${this.path}/google/callback`, this.authController.googleCallback);
        this.router.get(`${this.path}/me`, auth_2.authenticateToken, this.authController.getUserMe);
        this.router.patch(`${this.path}/me`, auth_2.authenticateToken, this.authController.updateUserMe);
    }
}
exports.AuthRoutes = AuthRoutes;
exports.default = new AuthRoutes().router;
