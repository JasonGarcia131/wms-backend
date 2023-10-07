const express = require('express');
const router = express.Router();
const salesOrdersController = require('../controllers/salesOrderController');

router.route('/')
    // .get(salesOrders.getAllSalesOrders)
    .post(salesOrdersController.postSalesOrder)

// router.route('/:user_id')
//     .get(salesOrders.getUserById)
//     .put(salesOrders.updateUser)
//     .delete(salesOrders.deleteUser)

module.exports = router;