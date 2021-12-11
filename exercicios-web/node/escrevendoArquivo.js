/**
 * Podemos usar o módulo core do próprio node para escrevermos/persistirmos arquivos
 */

 const fs = require('fs')

 const produto = {
     nome: 'Celular',
     preco: 2499.99,
     desconto: 0.15
 }

 fs.writeFile(__dirname+'/arquivoGerado.json', JSON.stringify(produto), err =>{
     console.log(err || 'Arquivo gerado com sucesso!')
 })

