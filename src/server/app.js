import express          from 'express';
import logger           from 'morgan';
import cookieParser     from 'cookie-parser';
import bodyParser       from 'body-parser';
import mongoose         from 'mongoose';
import path             from 'path';
import cors             from 'cors';
import compression 		from 'compression';

import routes           from './routes/routes';
import dbConfig         from './config/database';
import passport         from './config/passport';

//connect database
mongoose.connect(dbConfig.url);
//app
let app = express();
//Cross Origin Request Sharing
app.use(cors());
//passport
app.use(passport.initialize());
app.use(passport.session());
//define middleware
app.use(logger('dev'));
//parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//cookie
app.use(cookieParser());
//compression
app.use(compression({}));
//public file
app.use(express.static(path.join(__dirname, '../client')));
//routes
app.use(routes);

export default app;