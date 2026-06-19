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
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
class AuthService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    findUserByEmailOrUsername(emailOrUsername) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.users.findFirst({
                where: {
                    OR: [
                        { email: emailOrUsername },
                        { username: emailOrUsername },
                    ],
                },
            });
        });
    }
    createUser(username_1, email_1, password_1) {
        return __awaiter(this, arguments, void 0, function* (username, email, password, created_at = new Date()) {
            return this.prisma.users.create({
                data: { username, email, password, created_at },
            });
        });
    }
    findOrCreateGoogleUser(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.prisma.users.findFirst({
                where: { email },
            });
            if (existingUser) {
                return existingUser;
            }
            return this.prisma.users.create({
                data: {
                    email,
                    username: name || email.split("@")[0],
                    password: null,
                },
            });
        });
    }
    findById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.users.findUnique({
                where: { user_id: userId },
                select: {
                    user_id: true,
                    username: true,
                    email: true,
                    user_type: true,
                    booking_profile: {
                        select: {
                            first_name: true,
                            last_name: true,
                            phone: true,
                            id_card: true,
                            current_province: true,
                            current_district: true,
                            current_subdistrict: true,
                            current_zipcode: true,
                            current_address_detail: true,
                        },
                    },
                },
            });
        });
    }
    updateProfile(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const currentUser = yield this.prisma.users.findUnique({
                where: { user_id: userId },
                select: { email: true },
            });
            yield this.prisma.user_booking_profiles.upsert({
                where: { user_id: userId },
                create: {
                    user_id: userId,
                    first_name: data.name,
                    last_name: data.lastname,
                    phone: data.phone,
                    id_card: data.id_card,
                    email: (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) !== null && _a !== void 0 ? _a : undefined,
                    current_province: data.current_province,
                    current_district: data.current_district,
                    current_subdistrict: data.current_subdistrict,
                    current_zipcode: data.current_zipcode,
                    current_address_detail: data.current_address_detail,
                },
                update: {
                    first_name: data.name,
                    last_name: data.lastname,
                    phone: data.phone,
                    id_card: data.id_card,
                    current_province: data.current_province,
                    current_district: data.current_district,
                    current_subdistrict: data.current_subdistrict,
                    current_zipcode: data.current_zipcode,
                    current_address_detail: data.current_address_detail,
                },
            });
            return this.findById(userId);
        });
    }
}
exports.AuthService = AuthService;
