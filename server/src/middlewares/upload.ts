import multer, { FileFilterCallback } from "multer";
import fs from "fs";
import path from "path";
import { Request } from "express";

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadType = (req.body.upload_type || req.query.upload_type || "general").toString();
    const folder =
      uploadType === "slip"
        ? "slips"
        : uploadType === "attraction"
          ? "attractions"
          : uploadType === "profile"
            ? "profiles"
            : "general";
    const destination = path.join(__dirname, "..", "uploads", folder);
    fs.mkdirSync(destination, { recursive: true });
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^\w.-]/g, "-");
    cb(null, `${Date.now()}-${safeName}`);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const filetypes = /jpeg|jpg|png|webp/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

export default upload;
