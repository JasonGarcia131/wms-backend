const {SalesOrder, Company, Customer} = require("../models/index");

const getAllSalesOrders = async(req, res) => {
    const salesOrders = await SalesOrder.findAll();
    if(!salesOrders) res.status(404).send("no SalesOrders found");
    res.status(200).json({
        status: "success",
        salesOrders
    })
}

const postSalesOrder = async (req, res) => {
    const {salesorder_id, ship_date, ship_via, company_id, customer_id, ship_to} = req.body;
    if(!salesorder_id) return res.status(400).json({message: "empty values"});
    const response = await SalesOrder.create({salesorder_id, ship_date, ship_via, company_id, customer_id, ship_to});
    if(!response) res.json({message: "sales order not created"})
    res.status(201).send(response);
}

const getSalesOrderById = async(req, res) => {
    const {salesorder_id} = req.params;
    if(!salesorder_id) return res.status(400).send("empty value")
    const salesorder = await SalesOrder.findOne({
        where: {salesorder_id},
        include: [
         {
            model: Company,
         },
         {
            model: Customer
         }
        ], 
    }
        );
    if(!salesorder) return res.status(404).send("no salesorder found");
    console.log(salesorder)
    res.status(200).json({
        status: "success",
        salesorder
    })
}

const updateSalesOrder = async (req, res) => {
    const {salesorder_id} = req.params;
    const {ship_date, ship_via, company_id, customer_id, ship_to} = req.body;

    const foundSalesOrder = await SalesOrder.findOne({where: {salesorder_id}});
    if(!foundSalesOrder) return res.status(404).send("No sales order found");
    const updatedSalesOrder = await foundSalesOrder.update({
        ship_date: ship_date || foundSalesOrder.ship_date,
        ship_via: ship_via || foundSalesOrder.ship_via,
        ship_to: ship_to || foundSalesOrder.ship_to,
        company_id: company_id || foundSalesOrder.company_id,
        customer_id: customer_id || foundSalesOrder.customer_id
    });
    
    if(!updatedSalesOrder) return res.status(400).send("Cannot update sales order");
    res.status(204).json({
        status: "success",
        updatedSalesOrder
    });
}

const deleteSalesOrder = async (req, res) => {
    const {salesorder_id} = req.params;
    if(!salesorder_id) res.status(400).send("empty value");
    const deletedSalesOrder = await SalesOrder.destroy({where: {salesorder_id}});
    if(deletedSalesOrder) res.status(204).send("sales order deleted");
}

module.exports = {getAllSalesOrders, getSalesOrderById, postSalesOrder, updateSalesOrder, deleteSalesOrder};