const User = require('../models/user');

const getAllUsers = async(req, res) => {
    res.send("get all users");
}

module.exports = {getAllUsers};