const mongoose = require("mongoose")

const Register = require("../models/register.models")

const createRegister = async (req, res) => {
    const register = new Register({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cpf: req.body.cpf,
        email: req.body.email,
        phone: req.body.phone,
        state: req.body.state,
        city: req.body.city,
        aboutMe: req.body.aboutMe
    })
    const existantRegister = await Register.findOne({ cpf: req.body.cpf })
    if (existantRegister) {
        return res.status(409).json({err: "CPF já cadastrado."})
    }
    try {
        const newRegister = await register.save()
        res.status(201).json(newRegister)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

module.exports = {
    createRegister
}