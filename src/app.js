const express = require("express")

const app = express()

app.use(express.json())

const register = require("./routes/register.routes")

app.use("/black-api", register)

module.exports = app