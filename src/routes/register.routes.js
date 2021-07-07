const express = require("express")
const router = express.Router()
const controller = require("../controllers/register.controller")

router.post("/", controller.createRegister)

router.get("/register", controller.allRegister)

router.patch("/:id", controller.replaceRegister)

router.delete("/:id", controller.deleteRegister)

module.exports = router