const app = require("./src/app")

const PORT = 5050

const db = require("./src/data/database.js")
db.connect()

app.listen("PORT", () =>
    console.log(`̉̉Olá! O servidor está rodando na porta ${ PORT }`))