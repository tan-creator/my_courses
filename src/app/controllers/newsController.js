export default class newsController {
    //[GET] /news
    static index(req, res) {
        res.render('news');
    }
    static show(req, res) {
        res.send('news details');
    }
}
