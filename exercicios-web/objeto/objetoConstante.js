//Quando criamos um objeto a partir de uma constante, o que se torna constante é o valor do endereço de memória
// que o objeto aponta, e não suas propriedades. Uma forma de tornar as propriedades do objeto também constantes é através
// da função freeze

const pessoa = { nome: 'João'}
pessoa.nome = 'Maria'

console.log(pessoa)

//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa)

delete pessoa.nome
pessoa.nome = 'Carlos'
console.log(pessoa)

//Podemos freezar um objeto durante a sua criação

pessoa2 = Object.freeze({nome:'Joaquim'})
pessoa2.nome = 'Maria Joaquina'
console.log(pessoa2)