import { Router } from "express";
import {
  getAttendance,
  createAttendance,
  updateAttendance,
  getAttendance,
  deleteAttendance,
} from "../controllers/Attendance.controller.js";

const router = Router();

// Routes
router.post("/", createAttendance);
router.get("/", getAttendances);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance);
router.get("/:id", getAttendance);


export default router;