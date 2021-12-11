/**
 * A concatenação nos permite unir os valores de dois arrays, gerando assim um terceiro array
 * no processo de concatenação também é possível adicionar novos valores
 */

const filhas = ['Valeska', 'Cibalesca']
const filhos = ['Uoxington', 'Lorenvaldo']
const total = filhas.concat(filhos, 'Fulano')

console.log(total)

//A concatenação não é capaz de desestruturar um array até o segundo nível
console.log([].concat([1, 2], [3, 4], 5, [[6, 7 ]]))

