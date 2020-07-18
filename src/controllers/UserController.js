const mongoose = require("mongoose");
const User = mongoose.model("Job");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");


module.exports = {

    async index(req, res){
        const { page = 1 } = req.query;
        const users = await User.paginate({ }, { page, limit: 10 });
        return res.json(users);
    }
    
}