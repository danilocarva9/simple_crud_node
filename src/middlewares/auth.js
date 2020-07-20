const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

        const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).send({ error: "No Token Provided" });

        const parts = authHeader.split(" ");    

        if(!parts.length === 2)
            return res.status(401).send({ error: "Token error" });
     
        const [scheme, token] = parts;

        if(! /^Bearer$/i.test(scheme))
            return res.status(401).send({ error: "Token Malformatted" });

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error)
                return res.status(401).send({ error: "Token Invalid" });
                return next();
        });
}