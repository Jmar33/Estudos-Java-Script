/**
 * Em um computador, a porta representa um processo, assim, além de especificarmos qual o endereço ip de um computador, é 
 * necessário especificar qual será o processo responsável por executar a requisição
 * É possível que todas as requisições cheguem através de uma única porta e que depois sejam redistribuídas entre vários processos
 * através de um proxy reverse
 * O método "use" é usado como resposta para qualquer que seja a url passada
 * Quando trabalhamos com métodos HTTP, a nossa resposta sempre se dá via JSON, através do método "send"
 * O módulo body-parser é o responsável em converter um JSON enviado no body, em um objeto
 */
const porta = 3003

const express = require('express')
const app = express()
const dataBase = require('./dataBase')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true})) //middleware que intercepta todas as requisições do tipo urlencoded
                                                 //convertendo o seu body de string para objeto

app.get('/products/:id', (req, res, next) =>{
    res.send(dataBase.getProduct(req.params.id))
})

app.get('/products', (req, res, next) =>{
    res.send(dataBase.getProducts())
})

app.post('/products', (req, res, next) =>{
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })

    res.send(product) //JSON
})


app.put('/products/:id', (req, res, next) =>{
    const product = dataBase.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })

    res.send(product) //JSON
})

app.delete('/products/:id',(req, res, next) =>{
    const product  = dataBase.deleteProduct(req.params.id)
    res.send(product)
})




app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})