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

