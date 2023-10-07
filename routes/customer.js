const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.postCustomer)

// router.route('/:user_id')
//     .get(company.getUserById)
//     .put(company.updateUser)
//     .delete(company.deleteUser)

module.exports = router;