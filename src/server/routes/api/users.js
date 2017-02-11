import express from 'express';
import * as userController from '../../controllers/user-controller';
let users = express.Router();

users.route('/')
  .get(userController.getAll);
users.route('/:id')
  .get(userController.getById);
users.route('/register')
  .post(userController.register);
users.route('/login')
  .post(userController.login);
users.route('/logout')
  .get(userController.logout);

export default users;