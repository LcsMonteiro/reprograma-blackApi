const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    enterpriseName: {
        type: String,
        required: true
    },
    enterprisePresentation: {
        type: String,
        required: true
    },
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
    benefits: {
        type: String,
        required: true,
    }
})

const enterpriseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    enterpriseName: {
        type: String,
        required: true
    },
    representativeName: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    enterprisePhone: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    job: {
        type:[jobSchema],
        required: false,
        select: false,
        default: []
        
    }

})

module.exports = mongoose.model("job", jobSchema)
module.exports = mongoose.model("enterprise", enterpriseSchema)
