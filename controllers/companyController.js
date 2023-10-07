const {Company} = require("../models/index");

const getAllCompanies = async(req, res) => {
    const companies = await Company.findAll();
    if(!companies) res.status(404).send("no Companys found");
    res.status(200).json({
        status: "success",
        companies
    })
}

const postCompany = async (req, res) => {
    console.log("route hit")
    const {company_id, company_name} = req.body;
    if(!company_id || !company_name) return res.status(400).json({message: "empty values"});
    const response = await Company.create({company_id, company_name});
    console.log(response)
    if(!response) res.json({message: "company not created"})
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

module.exports = {getAllCompanies, postCompany};