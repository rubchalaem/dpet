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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionController = void 0;
const attraction_service_1 = require("../services/attraction.service");
const serializeAttraction = (item) => {
    var _a, _b, _c;
    return (Object.assign(Object.assign({}, item), { latitude: item.latitude === null ? null : Number(item.latitude), longitude: item.longitude === null ? null : Number(item.longitude), average_rating: ((_a = item.reviews) === null || _a === void 0 ? void 0 : _a.length)
            ? item.reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0) / item.reviews.length
            : 0, review_count: ((_b = item.reviews) === null || _b === void 0 ? void 0 : _b.length) || 0, favorite_count: ((_c = item.favorites) === null || _c === void 0 ? void 0 : _c.length) || 0 }));
};
class AttractionController {
    constructor() {
        this.attractionService = new attraction_service_1.AttractionService();
        this.list = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.attractionService.list(req.query);
                return res.json(items.map(serializeAttraction));
            }
            catch (error) {
                next(error);
            }
        });
        this.get = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.attractionService.get(Number(req.params.id));
                if (!item)
                    return res.status(404).json({ message: "Attraction not found" });
                return res.json(serializeAttraction(item));
            }
            catch (error) {
                next(error);
            }
        });
        this.categories = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json(yield this.attractionService.listCategories());
            }
            catch (error) {
                next(error);
            }
        });
        this.toggleFavorite = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!user_id)
                    return res.status(401).json({ message: "Unauthorized" });
                return res.json(yield this.attractionService.toggleFavorite(user_id, Number(req.params.id)));
            }
            catch (error) {
                next(error);
            }
        });
        this.myFavorites = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!user_id)
                    return res.status(401).json({ message: "Unauthorized" });
                return res.json(yield this.attractionService.myFavorites(user_id));
            }
            catch (error) {
                next(error);
            }
        });
        this.createReview = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!user_id)
                    return res.status(401).json({ message: "Unauthorized" });
                const rating = Number(req.body.rating);
                if (!rating || rating < 1 || rating > 5)
                    return res.status(400).json({ message: "Rating must be 1-5" });
                const review = yield this.attractionService.createReview({
                    user_id,
                    attraction_id: Number(req.params.id),
                    rating,
                    comment: req.body.comment,
                });
                return res.status(201).json(review);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AttractionController = AttractionController;
