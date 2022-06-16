import model from '../models/courses';
import utilCourses from '../../util/mongoose';

export default class coursesController {
    //[GET] /courses/:slug
    static show(req, res, next) {
        model
            .findOne({ slug: req.params.slug })
            .lean()
            .then((docs) => {
                res.render('courses/show', { docs });
            })
            .catch(next);
        //res.send(req.params.slug)
    }

    //[POST] /courses/create

    static create(req, res, next) {
        res.render('courses/create', {});
    }
}
