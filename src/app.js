const express = require("express")

const app = express()

app.use(express.json())

const cadastro = require("./routes/cadastros.routes")

app.use("/black-api", cadastro)

module.exports = app