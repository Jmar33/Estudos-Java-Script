//Uma forma de se passar parâmetros para um módulo, é através de uma função, ou seja, nosso módulo irá receber uma função que
//contém parâmetros e dentro dessa função podemos criar outras funções, classes e objetos que irão utilizar os parâmetros

module.exports = function(...nomes){
    return nomes.map(nome => `Bem vindo ${nome}!`)
}