const mongoose = require("mongoose");

const Job = require("../models/job.models");

const createJob = async (req, res) => {
  const job = new Job({
    _id: new mongoose.Types.ObjectId(),
    jobName: req.body.jobName,
    descriptionActivities: req.body.descriptionActivities,
    requisites: req.body.requisites,
    desirableQualities: req.body.desirableQualities,
    jobObjectives: req.body.jobObjectives,
    workplace: req.body.workplace,
    payment: req.body.payment,
    benefits: req.body.benefits,
    enterprise: req.body.enterprise,
    create: req.body.create,
  });
  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const listJob = async (req, res) => {
  const job = await Job.find();
  return res.status(200).json(job);
};

const searchJob = async (req, res) => {
  const search = req.params.jobName.toLowerCase();
  const anyLikeQuery = { $regex: `.*${search}.*`, $options: "i" };

  try {
    const jobs = await Job.find({ jobName: anyLikeQuery }).exec();
    if (jobs == undefined) {
      return res.status(404).json({ message: "Nenhuma vaga encontrada." });
    }
    return res.status(200).json(jobs);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const replaceJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(400).json({ message: "Job not found" });
    }
    if (req.body.jobName != null) {
      job.jobName = req.body.jobName;
    }
    if (req.body.descriptionActivities != null) {
      job.descriptionActivities = req.body.descriptionActivities;
    }
    if (req.body.requisites != null) {
      job.requisites = req.body.requisites;
    }
    if (req.body.desirableQualities != null) {
      job.desirableQualities = req.body.desirableQualities;
    }
    if (req.body.jobObjectives != null) {
      job.jobObjectives = req.body.jobObjectives;
    }
    if (req.body.workplace != null) {
      job.workplace = req.body.workplace;
    }
    if (req.body.payment != null) {
      job.payment = req.body.payment;
    }
    if (req.body.benefits != null) {
      job.benefits = req.body.benefits;
    }
    if (req.body.enterprise != null) {
      job.enterprise = req.body.enterprise;
    }
    if (req.body.create != null) {
      job.create = req.body.create;
    }
    const updateJob = await job.save();
    res.json(updateJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(400).json({ message: "Job not found" });
    }
    await job.remove();
    res.json({ message: "Job deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createJob,
  listJob,
  searchJob,
  replaceJob,
  deleteJob,
};
