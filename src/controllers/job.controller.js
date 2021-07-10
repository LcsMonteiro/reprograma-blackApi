const mongoose = require("mongoose")

const Job = require("../models/enterprise.models")

const createJob = async (req, res) => {
    const job = new Job({
        _id: new mongoose.Types.ObjectId(),
        enterpriseName: req.body.enterpriseName,
        enterprisePresentation: req.body.enterprisePresentation,
        jobName: req.body.jobName,
        descriptionActivities: req.body.descriptionActivities,
        requisites: req.body.requisites,
        desirableQualities: req.body.desirableQualities,
        jobObjectives: req.body.jobObjectives,
        workplace: req.body.workplace,
        payment: req.body.payment,
        benefits: req.body.benefits
    })
    try {
        const newRegister = await register.save()
        res.status(201).json(newRegister)
    } catch (err) {
        res.status(500).json({message:err.message})
    } //fazer rota
}
