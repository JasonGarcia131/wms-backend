const {Customer} = require("../models/index");

const getAllCustomers = async(req, res) => {
    const customers = await Customer.findAll();
    if(!customers) res.status(404).send("no customers found");
    res.status(200).json({
        status: "success",
        customers
    })
}

const postCustomer = async (req, res) => {
    const {customer_id, customer_name, sales_rep, sold_to} = req.body;
    if(!customer_id || !customer_name) return res.status(400).json({message: "empty values"});
    const response = await Customer.create({customer_id, customer_name, sales_rep, sold_to});
    if(!response) res.json({message: "Customer not created"})
    res.status(201).send(response);
}

const getCustomerById = async(req, res) => {
    const {customer_id} = req.params;
    if(!customer_id) return res.status(400).send("empty value")
    const customer = await Customer.findOne({where: {customer_id}});
    if(!customer) return res.status(404).send("no customer found");
    res.status(200).json({
        status: "success",
        customer
    })
}

const updateCustomer = async (req, res) => {
    const {customer_id} = req.params;
    const {customer_name, sales_rep, sold_to} = req.body;

    const foundCustomer = await Customer.findOne({where: {customer_id}});
    if(!foundCustomer) return res.status(404).send("No customer found");
    const updatedCustomer = await foundCustomer.update({
        customer_name: customer_name || foundCustomer.customer_name,
        sold_to: sold_to || foundCustomer.sold_to,
        sales_rep: sales_rep || foundCustomer.sales_rep
    });
    
    if(!updatedCustomer) return res.status(400).send("Cannot update customer");
    res.status(204).json({
        status: "success",
        updatedCustomer
    });
}

const deleteCustomer = async (req, res) => {
    const {customer_id} = req.params;
    if(!customer_id) res.status(400).send("empty value");
    const deletedCustomer = await Customer.destroy({where: {customer_id}});
    if(deletedCustomer) res.status(204).send("customer deleted");
}

module.exports = {getAllCustomers, getCustomerById, postCustomer, updateCustomer, deleteCustomer};