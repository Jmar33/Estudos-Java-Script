//A função map percorre os elmentos de um array e aplica uma função sobre eles
// gerando um novo array com mesmo tamanho do array original

let nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e * 2
})

//A função map sempre retorna um array, assim se atribuirmos uma função sem retorno, teremos um array
// de elementos "undefined"
console.log(resultado)

const soma = e => e + 10
const triplo = e => e * 3
const transformaEmReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//Podemos encadear vários map's que serão executados e retornaram um array
resultado = nums.map(soma).map(triplo).map(transformaEmReais)
console.log(resultado)