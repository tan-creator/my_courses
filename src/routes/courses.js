import express from 'express';
import coursesController from '../app/controllers/coursesController';

const routerCourses = express.Router();

routerCourses.get('/create', coursesController.create);
routerCourses.get('/:slug', coursesController.show);

export default routerCourses;
