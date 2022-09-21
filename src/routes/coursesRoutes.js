import express from "express";

//controllers
import {
  createCourse,
  getAllCourses,
  deleteCourse,
} from "../controller/courses.js";

//catcherror
import catchAsync from "../utils/catchAsync.js";

const router = express.Router();

router.get("/get-all", catchAsync(getAllCourses));
router.post("/create", catchAsync(createCourse));
router.delete("/delete/:courseId", catchAsync(deleteCourse));

export default router;

