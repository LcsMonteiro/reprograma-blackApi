const mongoose = require("mongoose")

const Enterprise = require("../models/enterprise.models")

const createEnterprise = async (req, res) => {
    const enterprise = new Enterprise({
        _id: new mongoose.Types.ObjectId(),
        enterpriseName: req.body.enterpriseName,
        representativeName: req.body.representativeName,
        enterprisePresentation: req.body.enterprisePresentation,
        cnpj: req.body.cnpj,
        email: req.body.email,
        enterprisePhone: req.body.enterprisePhone,
        state: req.body.state,
        city: req.body.city
    })
    const existantEnterprise = await Enterprise.findOne({ cnpj: req.body.cnpj })
    if (existantEnterprise) {
        return res.status(409).json({err: "CNPJ já cadastrado."})
    }
    try {
        const newEnterprise = await enterprise.save()
        res.status(201).json(newEnterprise)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const searchEnterprise = async (req,res) => {
    const enterprise = await Enterprise.find()
    return res.status(200).json(enterprise)
    
}

const replaceInterprise = async (req, res) => {
        try {
            const enterprise = await Enterprise.findById(req.params.id)
            if (enterprise == null) {
                return res.status(400).json({message: "Enterprise not found"})
            }
            if (req.body.enterpriseName != null) {
                enterprise.enterprise = req.body.enterpriseName
            }
            if (req.body.representativeName != null) {
                enterprise.representativeName = req.body.representativeName
            }
            if (req.body.cnpj != null) {
                enterprise.cnpj = req.body.cnpj
            }
            if (req.body.email != null) {
                enterprise.email = req.body.email
            }
            if (req.body.enterprisePhone != null) {
                enterprise.enterprisePhone = req.body.enterprisePhone
            }
            if (req.body.state != null) {
                enterprise.state = req.body.state
            }
            if (req.body.city != null) {
                enterprise.city = req.body.city
            }
            const updateEnterprise = await enterprise.save()
            res.json(updateEnterprise)
        } catch (err) {
            res.status(500).json({message: err.message})
            
        }
        
}
const deleteEnterprise = async (req, res) => {
    try {
        const enterprise = await Enterprise.findById(req.params.id)
        if (enterprise == null) {
            return res.status(400).json({message: "User not found"})
        }
        await enterprise.remove()
        res.json({message: "Enterprise deleted"})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = {
    createEnterprise,
    searchEnterprise,
    replaceInterprise,
    deleteEnterprise
}
