import express from 'express';
import users from './api/users';
import lists from './api/lists';

let routes = express.Router();

//api
routes.use('/api/users', users);
routes.use('/api/lists', lists);

export default routes;