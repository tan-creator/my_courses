import router from './new';
import routerSite from './site';
import routerCourses from './courses';

function route(app) {
    app.use('/news', router);
    app.use('/courses', routerCourses);

    app.use('/', routerSite);

    //
    // app.get('/', (req, res) => {
    //   res.render('home');
    // });

    // app.get('/news', (req, res) => {
    //   res.render('news');
    // });

    // app.get('/search', (req, res) => {
    //   res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //   console.log(req.body);

    //   res.send('hello');
    // });
}

export default route;
