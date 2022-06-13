    export default class siteController {
    //[GET] /
    static home(req, res) {
        res.render('home');
    }
    //[GET] / search
    static search(req, res) {
        res.render('search');
    }
}
