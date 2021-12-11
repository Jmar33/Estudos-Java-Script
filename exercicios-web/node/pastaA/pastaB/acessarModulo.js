const moduloA = require('../../moduloA') //A forma correta de acessarmos os arquivos é respeito as letras maísculas e minúsculas, pois a maioria
// dos servidores roda em Lnux que é sensitive case
console.log(moduloA.ola)
const pastaC = require('./pastaC')

//Podemos acessar além dos nossos módulos e módulos de terceiros
//os chamados "core" que são os módulos internos do node

console.log(pastaC.ola2)

// const http = require('http')
// http.createServer((req, res) =>{
//     res.write('Bom dia!')
//     res.end
// }).listen(8181)