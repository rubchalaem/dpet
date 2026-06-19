"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Set up multer for image uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadType = (req.body.upload_type || req.query.upload_type || "general").toString();
        const folder = uploadType === "slip"
            ? "slips"
            : uploadType === "attraction"
                ? "attractions"
                : uploadType === "profile"
                    ? "profiles"
                    : "general";
        const destination = path_1.default.join(__dirname, "..", "uploads", folder);
        fs_1.default.mkdirSync(destination, { recursive: true });
        cb(null, destination);
    },
    filename: (req, file, cb) => {
        const safeName = file.originalname.replace(/[^\w.-]/g, "-");
        cb(null, `${Date.now()}-${safeName}`);
    },
});
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        cb(null, true);
    }
    else {
        cb(new Error("Only images are allowed"));
    }
};
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter,
});
exports.default = upload;
