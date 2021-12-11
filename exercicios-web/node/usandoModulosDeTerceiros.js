/**
 * O npm é o gerenciador de pacotes do NODE
 * utilizado para instalar libs de terceiros
 * podemos instalar uma lib para um único projeto usando o "npm i nome_lib"
 * Ou passando o parâmetro "-g", para que a instalação seja feita de forma global
 */

// uma forma de se fazer referência a uma lib é usando o "_"
 const _ = require('lodash')

 //Função que execurtará uma callback a cada intervalo de tempo
 setInterval(() => console.log(_.random(500, 600)), 2000)

 //Nodemon é uma lib que permite o hot reload, ou seja, assim que nosso código é atualizado a aplicação 
 //é reiniciada