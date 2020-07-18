const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    collection: 'jobs',
    timestamps: true  
});

JobSchema.plugin(mongoosePaginate);
mongoose.model('Job', JobSchema);