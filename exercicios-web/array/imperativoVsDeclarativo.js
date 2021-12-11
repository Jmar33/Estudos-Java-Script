/**
 * O método imperativo dizemos exatamente o que queremos e com todos dos detalhes da implementação, ou seja,
 * como deve ser feito
 * Já na forma declarativa apenas nos interessa o que vai ser feito e não como vai ser feito
 */

 const alunos = [
    {nome: 'João', nota: 8.9},
    {nome: 'Maria', nota: 10},
    {nome: 'Ana', nota: 7}
]

let total1 = 0
for(let i = 0; i <alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(parseFloat(total1/alunos.length).toFixed(2))

const nota = a => a.nota
const soma = (total, atual) => total + atual

total2 = alunos.map(nota).reduce(soma)

console.log(parseFloat(total2/alunos.length).toFixed(2))