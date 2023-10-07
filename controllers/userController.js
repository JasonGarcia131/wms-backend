const {User} = require("../models/index");

const getAllUsers = async(req, res) => {
    const users = await User.findAll();
    if(!users) res.status(404).send("no users found");
    res.status(200).json({
        status: "success",
        users
    })
}

const postUser = async (req, res) => {
    console.log("route hit")
    const {user_id, name, password} = req.body;
    console.log("name, password", name, password)
    if(!name || !password) return res.status(400).json({message: "empty values"});
    const response = await User.create({user_id, name, password});
    if(!response) res.json({message: "user not created"})
    res.status(201).send(response);
}

const getUserById = async(req, res) => {
    console.log("req", req.params)
    const {user_id} = req.params;
    console.log("user id", user_id)
    if(!user_id) return res.status(400).send("empty value")
    const user = await User.findOne({where: {user_id}});
    if(!user) return res.status(404).send("no user found");
    res.status(200).json({
        status: "success",
        user
    })
}

const updateUser = async (req, res) => {
    const {user_id} = req.params;
    const {name, password} = req.body;

    const foundUser = await User.findOne({where: {user_id}});
    if(!foundUser) return res.status(404).send("No user found");
    foundUser.password = password || foundUser.password;
    foundUser.name = name || foundUser.name;
    const updatedUser = await foundUser.update({
        name: name || foundUser.name,
        password: password || foundUser.password
    });
    
    if(!updatedUser) return res.status(400).send("Cannot update user");
    res.status(204).json({
        status: "success",
        updatedUser
    });
}

const deleteUser = async (req, res) => {
    const {user_id} = req.params;
    if(!user_id) res.status(400).send("empty value");
    const deletedUser = await User.destroy({where: {user_id}});
    if(deletedUser) res.status(204).send("user deleted");
}

module.exports = {getAllUsers, postUser, getUserById, updateUser, deleteUser};