const mongoose = require("mongoose");
const Job = mongoose.model("Job");
const jwt = require("jsonwebtoken");

function generateToken(params = []){
    return jwt.sign(params, process.env.JWT_SECRET, {
        expiresIn: 60
    });
}

module.exports = {

    async index(req, res){
        const { page = 1 } = req.query;
        const jobs = await Job.paginate({ }, { page, limit: 10 });
        return res.json(jobs);
    },

    async show(req, res){
        const job = await Job.findById(req.params.id);
        return res.json(job);
    },

     // Gerando token ao criar produto
    async store(req, res){
        const job = await Job.create(req.body);

        return res.send({
            job: job,
            token: generateToken({ id: job.id })
        });
       // return res.json(job);
    },

    async update(req, res){
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(job);
    },

    async destroy(req, res){
        await Job.findByIdAndRemove(req.params.id);
        return res.send();
    }
   
};