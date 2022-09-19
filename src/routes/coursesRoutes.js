import express from "express";

//controllers
import { createCourse, getAllCourses } from "../controller/courses.js";

//catcherror
import catchAsync from "../utils/catchAsync.js";

const router = express.Router();

router.get("/get-all", catchAsync(getAllCourses));
router.post("/create", catchAsync(createCourse));

export default router;

