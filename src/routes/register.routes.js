const express = require("express")
const router = express.Router()
const controller = require("../controllers/register.controllers")

router.post("/", controller.createRegister)





module.exports = router