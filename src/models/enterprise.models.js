const mongoose = require("mongoose")

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
    }

})

module.exports = mongoose.model("enterprise", enterpriseSchema)
