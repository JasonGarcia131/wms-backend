const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.postUser)

router.route('/:user_id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;