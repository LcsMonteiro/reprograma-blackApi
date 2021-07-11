const express = require("express");
const router = express.Router();
const controller = require("../controllers/job.controller");

router.post("/create", controller.createJob);

router.get("/list", controller.listJob);
router.get("/:jobName", controller.searchJob);

router.patch("/update/:id", controller.replaceJob)

router.delete("/delete/:id",controller.deleteJob)

module.exports = router;
