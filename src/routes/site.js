import express from 'express';
import siteController from '../app/controllers/siteController';

const routerSite = express.Router();

routerSite.get('/search', siteController.search);
routerSite.get('/', siteController.home);

export default routerSite;
