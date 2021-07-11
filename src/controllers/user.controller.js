const mongoose = require("mongoose");

const User = require("../models/user.models");

const createUser = async (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email,
    phone: req.body.phone,
    state: req.body.state,
    city: req.body.city,
    services: req.body.services,
  });
  const existantUser = await User.findOne({
    cpf: req.body.cpf,
  });
  if (existantUser) {
    return res.status(409).json({ err: "CPF já cadastrado." });
  }
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const allUsers = async (req, res) => {
  const user = await User.find();
  return res.status(200).json(user);
};

const replaceUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(400).json({ message: "User not found" });
    }
    if (req.body.name != null) {
      user.name = req.body.name;
    }
    if (req.body.cpf != null) {
      user.cpf = req.body.cpf;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.phone != null) {
      user.phone = req.body.phone;
    }
    if (req.body.state != null) {
      user.state = req.body.state;
    }
    if (req.body.city != null) {
      user.city = req.body.city;
    }
    if (req.body.services != null) {
      user.services = req.body.services;
    }
    const updateUser = await user.save();
    res.json(updateUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      res.json({ message: "User not found" });
    }
    await user.remove();
    res.status(204).json({ message: "User deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  allUsers,
  replaceUser,
  deleteUser
};
