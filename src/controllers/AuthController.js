const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    
    async register(req, res){
       
        
        //Check if email exists;
        const emailExists = await User.findOne({email: req.body.email});
        if(emailExists) return res.status(400).send('Esse e-mail já está cadastrado.');

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = {
            name: req.body.name,
            email: req.body.email,
            ocuppation: req.body.ocuppation,
            password: hashPassword
        };

        try {
            const savedUser = await User.create(user);
            return res.json(savedUser);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    


    async login(req, res){
        
        //Check if email exists
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).json({ message: 'Email não cadastrado' });

        //Check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).json({ message: 'Senha inválida' });

        //If everything ok, give em' token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET );
        res.header('auth_token', token).json({ message: 'Logado com sucesso', token: token });

    },
    async logoff(req, res){

    }
};