/**
 * Uma forma de ler arquivos em JS é utilizando uma lib do próprio core
 * a fileSystem, que contém métodos para fazer leituras de formas síncronas 
 * e assíncronas
 */
const fs = require('fs')

//A varíavel reservada __dirname se refere a pasta local do módulo
const caminho = __dirname + '/arquivo.json'

//síncrono
//Requisições sícronas não são recomendadas, sob tudo em caso de arquivos muito grandes, pois podem acabar travando o 
//event loop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
//No caso da requisição assícrona além do caminho e econding, devemos passar uma função callback que será executada
//após o arquivo ser lido
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) //como o retorno é uma string é necessário convertermos em um objeto
    console.log(`${config.db.host}: ${config.db.port}`)
})

//Uma outra forma de ler arquivos no formato .json é apresentada a seguir:
const config = require('./arquivo.json')
console.log(config.db)
//Note que o console.log acima é resolvido e somente depois temos a resposta da leitura assíncrona

//Além de arquivos podemos ler também diretórios
//No exemplo abaixo passamos o diretório que desejamos ler e nos é exibido os arquivos presentes
fs.readdir(__dirname, 'utf-8', (err, arquivos) =>{
    console.log(arquivos)
})