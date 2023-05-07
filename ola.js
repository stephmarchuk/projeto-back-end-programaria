const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, Mundo!")
}


function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.listen(porta, mostraPorta)
app.use(router.get('/ola', mostraOla))
