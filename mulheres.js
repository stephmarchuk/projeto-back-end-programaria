const express = require("express") //iniciando o express
const router = express.Router() //configurando a primeira parte da rota

const app = express() //iniciando o app
const porta = 3333 // iniciando a porta

//abaixo crio a lista inicial de mulheres
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
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image=pOJSiGg-hxz0KdOIZxQhPVMOFh-7jsedml_HQPtQtHM',
        minibio: 'Hacker Antiracista'
    }
]

//GET
function mostraMulheres(request,response) {
    response.json(mulheres)
}

//PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET/mulheres
app.listen(porta, mostraPorta) //servidor ouvindo porta