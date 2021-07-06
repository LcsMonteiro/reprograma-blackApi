const express = require("express")

const app = express()

app.use(express.json())

const register = require("./routes/register.routes")

app.use("/blackapi", register)

module.exports = app