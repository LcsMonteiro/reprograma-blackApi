const express = require("express");

const app = express();

app.use(express.json());

const user = require("./routes/user.routes");
const enterprise = require("./routes/enterprise.routes");
const job = require("./routes/job.routes");

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.use("/users", user);
app.use("/enterprise", enterprise);
app.use("/jobs", job);

module.exports = app;
