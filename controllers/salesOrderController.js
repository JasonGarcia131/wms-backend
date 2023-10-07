const {SalesOrder} = require("../models/index");

const getAllSalesOrders = async(req, res) => {
    const salesOrders = await SalesOrder.findAll();
    if(!salesOrders) res.status(404).send("no SalesOrders found");
    res.status(200).json({
        status: "success",
        salesOrders
    })
}

const postSalesOrder = async (req, res) => {
    console.log("route hit")
    const {salesorder_id, ship_date, ship_via, company_id, customer_id, ship_to} = req.body;
    if(!salesorder_id) return res.status(400).json({message: "empty values"});
    const response = await SalesOrder.create({salesorder_id, ship_date, ship_via, company_id, customer_id, ship_to});
    if(!response) res.json({message: "sales order not created"})
    res.status(201).send(response);
}

// const getUserById = async(req, res) => {
//     console.log("req", req.params)
//     const {user_id} = req.params;
//     console.log("user id", user_id)
//     if(!user_id) return res.status(400).send("empty value")
//     const user = await User.findOne({where: {user_id}});
//     if(!user) return res.status(404).send("no user found");
//     res.status(200).json({
//         status: "success",
//         user
//     })
// }

// const updateUser = async (req, res) => {
//     const {user_id} = req.params;
//     const {name, password} = req.body;

//     const foundUser = await User.findOne({where: {user_id}});
//     if(!foundUser) return res.status(404).send("No user found");
//     foundUser.password = password || foundUser.password;
//     foundUser.name = name || foundUser.name;
//     const updatedUser = await foundUser.update({
//         name: name || foundUser.name,
//         password: password || foundUser.password
//     });
    
//     if(!updatedUser) return res.status(400).send("Cannot update user");
//     res.status(204).json({
//         status: "success",
//         updatedUser
//     });
// }

// const deleteUser = async (req, res) => {
//     const {user_id} = req.params;
//     if(!user_id) res.status(400).send("empty value");
//     const deletedUser = await User.destroy({where: {user_id}});
//     if(deletedUser) res.status(204).send("user deleted");
// }

module.exports = {getAllSalesOrders, postSalesOrder};