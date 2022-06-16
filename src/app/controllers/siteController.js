import model from '../models/courses';
import util from '../../util/mongoose';

export default class siteController {
    //[GET] /
    static home(req, res, next) {
        model
            .find({})
            .lean()
            .then((docs) => {
                res.render('home', { docs });
            })
            .catch(next);

        //res.render('home');
    }
    //[GET] / search
    static search(req, res) {
        res.render('search');
    }
}
