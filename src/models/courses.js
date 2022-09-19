import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  lessons: { type: Number },
});

const Courses = mongoose.model("Courses", coursesSchema);

export default Courses;

