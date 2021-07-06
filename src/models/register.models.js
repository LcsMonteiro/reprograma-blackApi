const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    phone: {
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
    aboutMe: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model("register", registerSchema)

