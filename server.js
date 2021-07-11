const app = require("./src/app")

const port = process.env.PORT || 4010

const db = require("./src/data/database")
db.connect()

app.listen(port, () =>
    console.log("Servidor conectado!"))