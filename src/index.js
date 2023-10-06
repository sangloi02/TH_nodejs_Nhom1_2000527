import dotenv, { config } from 'dotenv';
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/webRoute';
import path from 'path'
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
configViewEngine(app);
app.use('/static', express.static(path.join(__dirname,'public')))
app.use(express.static('src/public'));
initWebRoute(app);


app.listen(port, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);