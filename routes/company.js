const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.route('/')
    .get(companyController.getAllCompanies)
    .post(companyController.postCompany)

    router.route('/:company_id')
    .get(companyController.getCompanyById)
    .put(companyController.updateCompany)
    .delete(companyController.deleteCompany)

module.exports = router;