var express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user-controller'),
    listController = require('../controllers/list-controller');
    

router.route('/users')
  .get(userController.getAll);
router.route('/users/:id')
  .get(userController.getById);
router.route('/users/register')
  .post(userController.register);
router.route('/users/login')
  .post(userController.login);
router.route('/users/logout')
  .get(userController.logout);

router.route('/lists')
  .get(listController.getAll)
  .post(listController.add);
router.route('/lists/:id')
  .get(listController.getById)
  .put(listController.edit)
  .delete(listController.remove);

module.exports = router;