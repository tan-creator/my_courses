import router from './new';
import routerSite from './site';
import routerCourses from './courses';
import myCourses from './myStorage';

function route(app) {
    app.use('/news', router);
    app.use('/courses', routerCourses);
    app.use('/me', myCourses);
    app.use('/', routerSite);

    // app.get('/search', (req, res) => {
    //   res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //   console.log(req.body);

    //   res.send('hello');
    // });
}

export default route;
