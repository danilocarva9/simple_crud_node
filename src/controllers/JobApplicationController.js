const mongoose = require("mongoose");
const JobApplication = mongoose.model("JobApplication");
const jwt = require("jsonwebtoken");

module.exports = {

    //Show all my applications
    async myApplications(req, res){
        const { page = 1 } = req.query;
        const jobs_applied = await JobApplication.paginate({ user: req.params.user_id }, { page, limit: 10 }); //Find with pagination
        return res.json(jobs_applied);
    },

    //Apply for the job
    async applyForJob(req, res){
        try {
            const job_applied = await JobApplication.create(req.body);
            return res.status(200).json({ job: job_applied, message: 'Aplicado com sucesso' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    
}