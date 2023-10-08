const express = require('express');
const router = express.Router();
const uccBarcodeController = require('../controllers/uccBarcodeController');

router.route('/')
    .get(uccBarcodeController.getAllBarcodes)
    .post(uccBarcodeController.postBarcode)

router.route('/:barcode_id')
    .get(uccBarcodeController.getBarcodeById)
    .put(uccBarcodeController.updateBarcode)
    .delete(uccBarcodeController.deleteBarcode)

module.exports = router;