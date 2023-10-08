const express = require('express');
const router = express.Router();
const salesOrdersController = require('../controllers/salesOrderController');
const orderDetailsController = require('../controllers/orderDetailsController');

router.route('/')
    // .get(salesOrders.getAllSalesOrders)
    .post(salesOrdersController.postSalesOrder)

router.route('/:salesorder_id')
    .get(salesOrdersController.getSalesOrderById)
    .put(salesOrdersController.updateSalesOrder)
    .delete(salesOrdersController.deleteSalesOrder)

router.route('/:salesorder_id/orderdetail')
    .get(orderDetailsController.getAllOrderDetails)
    .post(orderDetailsController.postOrderDetail)

module.exports = router;