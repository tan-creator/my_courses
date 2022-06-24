import express from 'express';
import myController from '../app/controllers/myController';

const myCourses = express.Router();

myCourses.get('/stored/courses', myController.courses);

export default myCourses;
