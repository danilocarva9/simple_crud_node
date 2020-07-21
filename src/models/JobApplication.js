const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const JobApplicationSchema = new mongoose.Schema({
    commentary: {
        type: String
    },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    job: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Job" }
   // application: [{ job: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Job" }, user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}}]
    
},{
    collection: "jobs_applications",
    timestamps: true  
});

JobApplicationSchema.plugin(mongoosePaginate);
mongoose.model("JobApplication", JobApplicationSchema);