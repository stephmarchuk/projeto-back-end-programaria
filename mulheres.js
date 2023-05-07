const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const mulheres = [
    {
        nome: 'Stéphanie Marchuk',
        imagem: 'https://media.licdn.com/dms/image=pOJSiGg-hxz0KdOIZxQhPVMOFh-7jsedml_HQPtQtHM',
        minibio: 'desenvolvedora e ritmista'
    },
    {
        nome: 'Ana Luisa Mansor',
        imagem: 'https://media.licdn.com/dms/image=pOJSiGg-hxz0KdOIZxQhPVMOFh-7jsedml_HQPtQtHM',
        minibio: 'pesquisadora e ilustradora'
    },
    {
        nome: 'dilma cachorrinha',
        imagem: 'https://media.licdn.com/dms/image=pOJSiGg-hxz0KdOIZxQhPVMOFh-7jsedml_HQPtQtHM',
        minibio: 'pesquisadora e ilustradora'
    }
]

function mostraMulheres(request,response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))