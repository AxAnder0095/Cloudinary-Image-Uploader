import express from "express";
import upload from "../middleware/upload.js";
import { uploadImage, getMessage } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
// router.post("/upload-db", uploadDB);
router.get("/message", getMessage);

export default router;
