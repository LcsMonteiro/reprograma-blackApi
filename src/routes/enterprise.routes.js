const express = require("express")
const router = express.Router()
const controller = require("../controllers/enterprise.controller")

router.post("/create", controller.createEnterprise)

router.get("/list", controller.searchEnterprise)

router.patch("/update/:id", controller.replaceInterprise)

router.delete("/delete/:id", controller.deleteEnterprise)

module.exports = router

