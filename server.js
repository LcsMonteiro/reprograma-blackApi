const app = require("./src/app")

const PORT = 4010

const db = require("./src/data/database")
db.connect()

app.listen(PORT, () =>
    console.log(`̉̉Olá! O servidor está rodando na porta ${ PORT }`))