import express from 'express';
import coursesController from '../app/controllers/coursesController';

const routerCourses = express.Router();

routerCourses.get('/create', coursesController.create);
routerCourses.post('/store', coursesController.store);
routerCourses.get('/:_id/edit', coursesController.edit);
routerCourses.put('/:_id', coursesController.update);
routerCourses.delete('/:_id', coursesController.destroy);
routerCourses.get('/:slug', coursesController.show);

export default routerCourses;
