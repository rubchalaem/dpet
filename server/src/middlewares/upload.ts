import multer, { FileFilterCallback } from "multer";
import { Request } from "express";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configure Cloudinary
// Cloudinary SDK automatically picks up CLOUDINARY_URL from process.env
// but we call config() just to ensure it is initialized.
cloudinary.config();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: Request, file: Express.Multer.File) => {
    const uploadType = (req.body.upload_type || req.query.upload_type || "general").toString();
    const folder =
      uploadType === "slip"
        ? "dpet/slips"
        : uploadType === "attraction"
          ? "dpet/attractions"
          : uploadType === "profile"
            ? "dpet/profiles"
            : "dpet/general";

    // Extract file name without extension
    const nameWithoutExt = file.originalname
      .split(".")
      .slice(0, -1)
      .join(".")
      .replace(/[^\w.-]/g, "-");

    return {
      folder: folder,
      public_id: `${Date.now()}-${nameWithoutExt}`,
      allowed_formats: ["jpeg", "jpg", "png", "webp"],
    };
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const filetypes = /jpeg|jpg|png|webp/;
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype) {
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
