const fs = require('fs')
const path = require('path')




function lerArquivo(arquivo){

    const caminho = path.join(__dirname, arquivo)

    return new Promise(resolve =>{
        fs.readFile(caminho, (_, conteudo) =>{
            resolve(conteudo.toString())
        })
    })
}

lerArquivo('dados.txt')
    .then(linhas => linhas.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O conteudo é: ${conteudo}`)
    .then(console.log)
