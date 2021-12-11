/*
** O  For In é uma forma de percorrer os índices de um array
** Ou os atributos de um objeto 
*/

const notas = [6.4, 7.1, 8.7, 9.6]

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 60
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}