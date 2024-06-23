import express from "express";
import multer from "multer";
import path from "path";
import { getIndividualVideo, uploadVideo } from "../controller/video";
import { verifyUserToken } from "../../utills/verifyToken";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/videos");
  },
  filename: (req, file, cb) => {
    try {
      const fileType = file.mimetype.split("/");
      if (fileType[0] === "video") {
        cb(null, Date.now() + path.extname(file.originalname));
      }
    } catch (error) {
      return error;
    }
  },
});
const uploadMiddleware = multer({ storage: storage });

router.post("/", verifyUserToken, uploadMiddleware.single("file"), uploadVideo);
router.get("/:id", verifyUserToken, getIndividualVideo);

export default router;
