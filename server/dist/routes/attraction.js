"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionRoutes = void 0;
const express_1 = require("express");
const attraction_1 = require("../controllers/attraction");
const auth_1 = require("../middlewares/auth");
class AttractionRoutes {
    constructor() {
        this.path = "/attractions";
        this.router = (0, express_1.Router)();
        this.attractionController = new attraction_1.AttractionController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/categories", this.attractionController.categories);
        this.router.get(this.path, this.attractionController.list);
        this.router.get(`${this.path}/favorites/me`, auth_1.authenticateToken, this.attractionController.myFavorites);
        this.router.get(`${this.path}/:id`, this.attractionController.get);
        this.router.post(`${this.path}/:id/favorite`, auth_1.authenticateToken, this.attractionController.toggleFavorite);
        this.router.post(`${this.path}/:id/reviews`, auth_1.authenticateToken, this.attractionController.createReview);
    }
}
exports.AttractionRoutes = AttractionRoutes;
exports.default = new AttractionRoutes().router;
