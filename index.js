import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import * as path from 'path';
import { fileURLToPath } from "url";
import route from './src/routes';

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use('/src', express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})