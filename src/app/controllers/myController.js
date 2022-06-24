import model from '../models/courses';
import utilCourses from '../../util/mongoose';

export default class myController {
    //[GET] /me/stored/courses
    static courses(req, res, next) {
        model
            .find({})
            .lean()
            .then((courses) => res.render('me/stored-courses', { courses }))
            .catch(next);
    }
}
