const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.route('/')
    .get(companyController.getAllCompanies)
    .post(companyController.postCompany)

// router.route('/:user_id')
//     .get(company.getUserById)
//     .put(company.updateUser)
//     .delete(company.deleteUser)

module.exports = router;