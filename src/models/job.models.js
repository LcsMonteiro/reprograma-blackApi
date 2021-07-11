const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    jobName: {
        type: String,
        required: true
    },
    descriptionActivities: {
        type: String,
        required: true
    },
    requisites: {
        type: String,
        required: true
    },
    desirableQualities: {
        type: String,
        required: true

    },
    jobObjectives: {
        type: String,
        required: true
    },
    workplace: {
        type: String,
        required: true
        
    },
    payment: {
        type: String,
        required: true
    },
    benefits: [{
        type: String,
        required: true,
    }],
    enterprise: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"enterprise"
    },
    create: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("job", jobSchema)