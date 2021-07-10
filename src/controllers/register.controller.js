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

const allRegister = async (req, res) => {
    const register = await Register.find()
    return res.status(200).json(register)
}

const replaceRegister = async (req, res) => {
    try {
        const register = await Register.findById(req.params.id)
        if (register == null) {
            return res.status(400).json({message: "User not found"})
        }
        if (req.body.name != null) {
            register.name = req.body.name
        }
        if (req.body.cpf != null) {
            register.cpf = req.body.cpf
        }
        if (req.body.email != null) {
            register.email = req.body.email
        }
        if (req.body.phone != null) {
            register.phone = req.body.phone
        }
        if (req.body.state != null) {
            register.state = req.body.state
        }
        if (req.body.city != null) {
            register.city = req.body.city
        }
        if (req.body.aboutMe != null) {
            register.aboutMe = req.body.aboutMe
        }
        const updateRegister = await register.save()
        res.json(updateRegister)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    
}

const deleteRegister = async (req, res) => {
    try {
        const register = await Register.findById(req.params.id)
        if (register == null) {
            res.json({message: "User not found"})
        }
        await register.remove()
        res.status(204).json({message: "User deleted"})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = {
    createRegister,
    allRegister,
    replaceRegister,
    deleteRegister

}