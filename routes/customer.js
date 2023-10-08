const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.postCustomer)

router.route('/:customer_id')
    .get(customerController.getCustomerById)
    .put(customerController.updateCustomer)
    .delete(customerController.deleteCustomer)

module.exports = router;