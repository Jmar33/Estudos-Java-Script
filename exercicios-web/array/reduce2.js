const alunos = [
    {nome: 'José', nota: 8.9, bolsista: true},
    {nome: 'Maria', nota: 10, bolsista: false},
    {nome: 'Joana', nota: 7, bolsista: false},
    {nome: 'Joaquim', nota: 5.0, bolsista: true}
]

const possuiBolsa = a => a.bolsista
//Função reduce que diz se todos os alunos são bolsitas

const todosBolsistas = alunos.map(possuiBolsa).reduce(function(acumulador, atual){
    return (acumulador && atual)
})

//Função reduce que diz se pelo um dos alunos é bolsista
const peloMenosUmBolsista = alunos.map(possuiBolsa).reduce(function(acumulador, atual){
    return (acumulador || atual)
})
console.log(todosBolsistas)
console.log(peloMenosUmBolsista)