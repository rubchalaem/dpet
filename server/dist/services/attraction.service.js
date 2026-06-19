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
exports.AttractionService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const attractionInclude = {
    category: true,
    images: { orderBy: [{ is_cover: "desc" }, { sort_order: "asc" }] },
    favorites: { select: { id: true } },
    reviews: { include: { user: true }, orderBy: { review_date: "desc" } },
    tour_packages: { include: { schedules: true } },
};
class AttractionService {
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const search = (_a = query.search) === null || _a === void 0 ? void 0 : _a.toString().trim();
            const categoryId = Number(query.category_id || 0);
            const district = (_b = query.district) === null || _b === void 0 ? void 0 : _b.toString();
            const subdistrict = (_c = query.subdistrict) === null || _c === void 0 ? void 0 : _c.toString();
            const popular = query.popular === "true";
            const hasTours = query.has_tours === "true";
            return prisma_1.default.tourist_attractions.findMany({
                where: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (search
                    ? {
                        OR: [
                            { attraction_name: { contains: search } },
                            { description: { contains: search } },
                            { location: { contains: search } },
                        ],
                    }
                    : {})), (categoryId ? { category_id: categoryId } : {})), (district ? { district } : {})), (subdistrict ? { subdistrict } : {})), (popular ? { is_popular: true } : {})), (hasTours ? { tour_packages: { some: {} } } : {})),
                include: attractionInclude,
                orderBy: [{ is_popular: "desc" }, { attraction_id: "asc" }],
            });
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.tourist_attractions.findUnique({
                where: { attraction_id: id },
                include: attractionInclude,
            });
        });
    }
    listCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.categories.findMany({ orderBy: { category_id: "asc" } });
        });
    }
    toggleFavorite(user_id, attraction_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield prisma_1.default.favorites.findUnique({
                where: { user_id_attraction_id: { user_id, attraction_id } },
            });
            if (existing) {
                yield prisma_1.default.favorites.delete({ where: { id: existing.id } });
                return { favorited: false };
            }
            yield prisma_1.default.favorites.create({ data: { user_id, attraction_id } });
            return { favorited: true };
        });
    }
    myFavorites(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.favorites.findMany({
                where: { user_id },
                include: { attraction: { include: attractionInclude } },
                orderBy: { created_at: "desc" },
            });
        });
    }
    createReview(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.reviews.create({
                data,
                include: { user: true, attraction: true },
            });
        });
    }
}
exports.AttractionService = AttractionService;
