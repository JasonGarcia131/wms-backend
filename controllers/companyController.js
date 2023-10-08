const {Company} = require("../models/index");

const getAllCompanies = async(req, res) => {
    const companies = await Company.findAll();
    if(!companies) res.status(404).send("no company found");
    res.status(200).json({
        status: "success",
        companies
    })
}

const postCompany = async (req, res) => {
    const {company_id, company_name} = req.body;
    if(!company_id || !company_name) return res.status(400).json({message: "empty values"});
    const response = await Company.create({company_id, company_name});
    if(!response) res.json({message: "company not created"})
    res.status(201).send(response);
}

const getCompanyById = async(req, res) => {
    const {company_id} = req.params;
    if(!company_id) return res.status(400).send("empty value")
    const company = await Company.findOne({where: {company_id}});
    if(!company) return res.status(404).send("no company found");
    res.status(200).json({
        status: "success",
        company
    })
}

const updateCompany = async (req, res) => {
    const {company_id} = req.params;
    const {company_name} = req.body;

    const foundCompany = await Company.findOne({where: {company_id}});
    if(!foundCompany) return res.status(404).send("No company found");
    const updatedCompany = await foundCompany.update({
        company_name: company_name || foundCompany.company_name,
    });
    
    if(!updatedCompany) return res.status(400).send("Cannot update company");
    res.status(204).json({
        status: "success",
        updatedCompany
    });
}

const deleteCompany = async (req, res) => {
    const {company_id} = req.params;
    if(!company_id) res.status(400).send("empty value");
    const deletedCompany = await Company.destroy({where: {company_id}});
    if(deletedCompany) res.status(204).send("company deleted");
}

module.exports = {getAllCompanies, getCompanyById, postCompany, updateCompany, deleteCompany};