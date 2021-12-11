const express = require('express')
const app = express()


//Middle
app.use(express.static('.')) //informa que o servidor irá forncer as páginas staticas
app.use(express.urlencoded({extended: true})) //transforma um formulário em um objeto
app.use(express.json()) //transforma um json em um objeto

const multer = require('multer')


//Configuração para salvar o arquivo em uma pasta específica e alterar o nome do próprio arquivo
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err){
            console.log('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) =>{
    res.send({
        ...req.body,
        id: 1
    })
})


app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen('8080', () => console.log('Executando...'))