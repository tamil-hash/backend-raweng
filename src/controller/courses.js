import Courses from "../models/courses.js";

export const createCourse = async (req, res, next) => {
  const { name, description, lessons } = req.body;
  const course = await Courses.create({
    name,
    description,
    lessons,
  });

  res.status(201).json(course);
};

export const getAllCourses = async (req, res, next) => {
  const courses = await Courses.find({});

  res.status(200).send(courses);
};

export const deleteCourse = async (req, res, next) => {
  const { courseId } = req.params;
  if (!courseId) {
    res.status(400).json("Course id missing");
  } else {
    await Courses.deleteOne({ _id: courseId });
    res.status(200).json("Course Deleted Successfully.");
  }
};

