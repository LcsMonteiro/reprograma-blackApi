const express = require("express")

const app = express()

app.use(express.json())

const register = require("./routes/register.routes")
const enterprise = require("./routes/enterprise.routes")

app.use("/register", register)
app.use("/enterprise", enterprise)


module.exports = app