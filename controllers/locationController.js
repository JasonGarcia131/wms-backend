// const {Location} = require("../models/index");

// const getAllLocations = async(req, res) => {
//     const locations = await Location.findAll();
//     if(!locations) res.status(404).send("no order detail found");
//     res.status(200).json({
//         status: "success",
//         locations
//     })
// }
  
// const postLocation = async (req, res) => {
//     console.log("route hit")
//     const {inventory_id, sku_number, color, dimensions, weight, case_pack, quantity} = req.body;
//     if(!inventory_id) return res.status(400).json({message: "empty values"});
//     const response = await Inventory.create({inventory_id, sku_number, color, dimensions, weight, case_pack, quantity});
//     if(!response) res.json({message: "inventory not created"})
//     res.status(201).send(response);
// }

// // const getUserById = async(req, res) => {
// //     console.log("req", req.params)
// //     const {user_id} = req.params;
// //     console.log("user id", user_id)
// //     if(!user_id) return res.status(400).send("empty value")
// //     const user = await User.findOne({where: {user_id}});
// //     if(!user) return res.status(404).send("no user found");
// //     res.status(200).json({
// //         status: "success",
// //         user
// //     })
// // }

// // const updateUser = async (req, res) => {
// //     const {user_id} = req.params;
// //     const {name, password} = req.body;

// //     const foundUser = await User.findOne({where: {user_id}});
// //     if(!foundUser) return res.status(404).send("No user found");
// //     foundUser.password = password || foundUser.password;
// //     foundUser.name = name || foundUser.name;
// //     const updatedUser = await foundUser.update({
// //         name: name || foundUser.name,
// //         password: password || foundUser.password
// //     });
    
// //     if(!updatedUser) return res.status(400).send("Cannot update user");
// //     res.status(204).json({
// //         status: "success",
// //         updatedUser
// //     });
// // }

// // const deleteUser = async (req, res) => {
// //     const {user_id} = req.params;
// //     if(!user_id) res.status(400).send("empty value");
// //     const deletedUser = await User.destroy({where: {user_id}});
// //     if(deletedUser) res.status(204).send("user deleted");
// // }

// module.exports = {getAllInventory, postInventory};