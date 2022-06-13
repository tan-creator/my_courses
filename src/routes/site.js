import express from 'express';
import siteController from '../app/controllers/siteController';

const routerSite = express.Router();

routerSite.use('/search', siteController.search);
routerSite.use('/', siteController.home);

export default routerSite;
