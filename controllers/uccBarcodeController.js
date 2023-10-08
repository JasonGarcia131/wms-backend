const {Company, UccBarcode} = require("../models/index");

const getAllBarcodes = async(req, res) => {
    const uccbarcode = await UccBarcode.findAll();
    if(!uccbarcode) res.status(404).send("no order detail found");
    res.status(200).json({
        status: "success",
        uccbarcode
    })
}
  
const postBarcode = async (req, res) => {
    const {barcode_id, sku_number, color, quantity, location_id, company_id} = req.body;
    if(!barcode_id) return res.status(400).json({message: "empty values"});
    const response = await UccBarcode.create({barcode_id, sku_number, color, quantity, location_id, company_id});
    if(!response) res.json({message: "ucc not created"});
    res.status(201).send(response);
}

const getBarcodeById = async(req, res) => {
    const {barcode_id} = req.params;
    if(!barcode_id) return res.status(400).send("empty value");
    const barcode = await UccBarcode.findOne({
        include: [
            {
                model: Company,
                as: 'company'           
            }
        ],
        where: {barcode_id}, 
    });
    if(!barcode) return res.status(404).send("no barcode found");
    res.status(200).json({
        status: "success",
        barcode
    })
}

const updateBarcode = async (req, res) => {
    const {barcode_id} = req.params;
    const {sku_number, quantity, location_id, company_id, color} = req.body;

    const foundBarcode = await UccBarcode.findOne({where: {barcode_id}});
    if(!foundBarcode) return res.status(404).send("No barcode found");
    const updatedBarcode = await foundBarcode.update({
        sku_number: sku_number || foundBarcode.sku_number,
        quantity: quantity || foundBarcode.quantity,
        color: color || foundBarcode.color,
        company_id: company_id || foundBarcode.company_id,
        location_id: location_id || foundBarcode.location_id
    });
    
    if(!updatedBarcode) return res.status(400).send("Cannot update barcode");
    res.status(204).json({
        status: "success",
        updatedBarcode
    });
}

const deleteBarcode = async (req, res) => {
    const {barcode_id} = req.params;
    if(!barcode_id) res.status(400).send("empty value");
    const deletedBarcode = await barcode.destroy({where: {barcode_id}});
    if(deletedBarcode) res.status(204).send(" barcode deleted");
}

module.exports = {getAllBarcodes, getBarcodeById, postBarcode, updateBarcode, deleteBarcode};