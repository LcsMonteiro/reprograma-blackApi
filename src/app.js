const express = require("express");

const app = express();

app.use(express.json());

const user = require("./routes/user.routes");
const enterprise = require("./routes/enterprise.routes");
const job = require("./routes/job.routes");

app.use("/", (req, res) => res.status(200).json({message: "Heroku funcionando"}));
app.use("/users", user);
app.use("/enterprise", enterprise);
app.use("/jobs", job);

module.exports = app;
