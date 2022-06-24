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

    //[GET] /courses/create
    static create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    static store(req, res, next) {
        //res.json(req.body);
        const formData = req.body;
        const course = new model(formData);
        course
            .save()
            .then(() => res.redirect(`/`))
            .catch((err) => {});
    }

    //[GET] /courses/:_id/edit
    static edit(req, res, next) {
        model
            .findById(req.params._id)
            .lean()
            .then((courses) => {
                res.render('courses/edit', { courses });
            })
            .catch(next);
        // res.send(req.params._id);
    }

    //[PUT] /courses/:_id
    static update(req, res, next) {
        model
            .updateOne({ _id: req.params._id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:_id
    static destroy(req, res, next) {
        model
            .deleteOne({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
