//Crie uma função que recebe dois parâmetros, o primeiro é um array
//e o segundo específica uma quantidade de dígitos. 
//Essa função deverá retornar somente aqueles números que possume a quantidade
// de dígitos indicada pelo segundo parâmetro


const filtrarPorQuantidadeDeDigitos = function(array, quantidadeDeDigitos){
    console.log(array.filter(num => num >= Math.pow(10, quantidadeDeDigitos -1 ) && num < Math.pow(10, quantidadeDeDigitos)))
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)