import express from 'express';
import * as listController from '../../controllers/list-controller';
let lists = express.Router();

lists.route('/')
  .get(listController.getAll)
  .post(listController.add);
lists.route('/:id')
  .get(listController.getById)
  .put(listController.edit)
  .delete(listController.remove);

export default lists;