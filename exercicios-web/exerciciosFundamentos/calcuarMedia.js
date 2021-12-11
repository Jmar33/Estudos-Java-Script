//Crie uma função que recebe como parâmetro um array de números, com uma quantidade inderminada
// de elementos e que retorne uma média simples

const calcularMedia = function(array){

    let total 

    total = array.reduce((soma, valorAtual) => soma + valorAtual )
    
    let media = total / array.length
    console.log(media)
}


calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])

