import express from "express";

//controllers
import { registerUser, loginUser } from "../controller/auth.js";

//catcherror
import catchAsync from "../utils/catchAsync.js";

const router = express.Router();

router.post("/register", catchAsync(registerUser));
router.post("/login", catchAsync(loginUser));

export default router;

