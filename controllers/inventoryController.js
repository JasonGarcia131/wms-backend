const {Inventory} = require("../models/index");

const getAllInventory = async(req, res) => {
    const inventory = await Inventory.findAll();
    if(!inventory) res.status(404).send("no order detail found");
    res.status(200).json({
        status: "success",
        inventory
    })
}
  
const postInventory = async (req, res) => {
    const {inventory_id, sku_number, color, dimensions, weight, case_pack, quantity} = req.body;
    if(!inventory_id) return res.status(400).json({message: "empty values"});
    const response = await Inventory.create({inventory_id, sku_number, color, dimensions, weight, case_pack, quantity});
    if(!response) res.json({message: "inventory not created"})
    res.status(201).send(response);
}

const getInventoryById = async(req, res) => {
    const {inventory_id} = req.params;
    if(!inventory_id) return res.status(400).send("empty value")
    const inventory = await Inventory.findOne({where: {inventory_id}});
    if(!inventory) return res.status(404).send("no inventory found");
    res.status(200).json({
        status: "success",
        inventory
    })
}

const updateInventory = async (req, res) => {
    const {inventory_id} = req.params;
    const {sku_number, quantity, case_pack, dimensions, weight} = req.body;

    const foundInventory = await Inventory.findOne({where: {inventory_id}});
    if(!foundInventory) return res.status(404).send("No inventory found");
    const updatedInventory = await foundInventory.update({
        inventory_id: inventory_id || foundInventory.inventory_id,
        sku_number: sku_number || foundInventory.sku_number,
        color: color || foundInventory.color,
        quantity: quantity || foundInventory.quantity,
        case_pack: case_pack || foundInventory.case_pack,
        dimensions: dimensions || foundInventory.dimensions,
        weight: weight || foundInventory.weight
    });
    
    if(!updatedInventory) return res.status(400).send("Cannot update inventory");
    res.status(204).json({
        status: "success",
        updatedInventory
    });
}

const deleteInventory = async (req, res) => {
    const {inventory_id} = req.params;
    if(!inventory_id) res.status(400).send("empty value");
    const deletedInventory = await Inventory.destroy({where: {inventory_id}});
    if(deletedInventory) res.status(204).send("inventory deleted");
}

module.exports = {getAllInventory, getInventoryById, postInventory, updateInventory, deleteInventory};