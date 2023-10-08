const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.route('/')
    .get(inventoryController.getAllInventory)
    .post(inventoryController.postInventory)

router.route('/:inventory_id')
    .get(inventoryController.getInventoryById)
    .put(inventoryController.updateInventory)
    .delete(inventoryController.deleteInventory)

module.exports = router;