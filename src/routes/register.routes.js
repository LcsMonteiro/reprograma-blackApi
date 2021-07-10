const express = require("express")
const router = express.Router()
const controller = require("../controllers/register.controller")

router.post("/create", controller.createRegister)

router.get("/list", controller.allRegister)

router.patch("/update/:id", controller.replaceRegister)

router.delete("/delete/:id", controller.deleteRegister)

module.exports = router