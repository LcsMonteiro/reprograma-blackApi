const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/create", controller.createUser);

router.get("/list", controller.allUsers);

router.patch("/update/:id", controller.replaceUser);

router.delete("/delete/:id", controller.deleteUser);

module.exports = router;
