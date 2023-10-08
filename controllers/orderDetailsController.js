const {OrderDetail} = require("../models/index");

const getAllOrderDetails = async(req, res) => {
    const orderDetail = await OrderDetail.findAll();
    if(!orderDetail) res.status(404).send("no order detail found");
    res.status(200).json({
        status: "success",
        orderDetail
    })
}

const postOrderDetail = async (req, res) => {
    const {salesorder_id} = req.params;
    const {order_details_id, sku_number, color, quantity} = req.body;
    if(!salesorder_id) return res.status(400).json({message: "empty values"});
    const response = await OrderDetail.create({salesorder_id, order_details_id, sku_number, color, quantity});
    if(!response) res.json({message: "sales order not created"})
    res.status(201).send(response);
}

const getOrderDetailById = async(req, res) => {
    const {order_details_id} = req.params;
    if(!order_details_id) return res.status(400).send("empty value")
    const orderDetail = await OrderDetail.findOne({where: {order_details_id}});
    if(!orderDetail) return res.status(404).send("no orderDetail found");
    res.status(200).json({
        status: "success",
        orderDetail
    })
}

const updateOrderDetail = async (req, res) => {
    const {salesorder_id} = req.params;
    const {sku_number, color, quantity, order_details_id} = req.body;

    const foundOrderDetail = await OrderDetail.findOne({where: {salesorder_id}});
    if(!foundOrderDetail) return res.status(404).send("No order detail found");

    const updatedOrderDetail = await OrderDetail.update({
        order_details_id: order_details_id || foundOrderDetail.order_details_id,
        sku_number: sku_number || foundOrderDetail.sku_number,
        color: color || foundOrderDetail.color,
        quantity: quantity || foundOrderDetail.quantity
    });
    
    if(!updatedOrderDetail) return res.status(400).send("Cannot update order detail");
    res.status(204).json({
        status: "success",
        updateOrderDetail
    });
}

const deleteOrderDetail = async (req, res) => {
    const {order_details_id} = req.params;
    if(!order_details_id) res.status(400).send("empty value");
    const deltedOrderDetail = await OrderDetail.destroy({where: {order_details_id}});
    if(deltedOrderDetail) res.status(204).send("order detail deleted");
}

module.exports = {getAllOrderDetails, getOrderDetailById, postOrderDetail, updateOrderDetail, deleteOrderDetail};