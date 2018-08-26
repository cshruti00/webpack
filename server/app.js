import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('combined'));

//views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie-parser
app.use(cookieParser());

app.use("/", routes);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.render('error');
	next();
});

export default app;