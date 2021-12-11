/**
 * As funções anônimas são extremamente comuns em JS, como o nome diz são funções que não possuem nome
 * ArrowFunctions são funções anônimas
 * Funções anônimas podem ser atribuídas a variáveis, ou serem passadas diretamente como parâmetro para outra função
 */
const soma = function(a, b){
    return a + b
}

function imprimirResultado(x, y, operacao = soma){
    console.log(operacao(x, y))
}


imprimirResultado(3, 4) 
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        return console.log('Olá')
    }
}

pessoa.falar()