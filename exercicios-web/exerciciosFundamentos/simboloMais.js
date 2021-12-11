//Criar uma função que recebe um número como parâmetro
// e retorna o símbolo mais a quantidade de vezes que foi passada como parâmetro

const simboloMais = function(repeticoes){
    let mais =''
    for(let i = 0; i< repeticoes; i++){
        mais = mais.concat('+')
    }

    return console.log(mais)
}

simboloMais(2)
simboloMais(4)