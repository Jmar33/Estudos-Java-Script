const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // masssa quebrou o carro!
//O pop remove o último elemento de um array
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

//
pilotos.shift() //O método shift remove o primeiro elemento de um array
console.log(pilotos)

//O método unshift insere um elemento na primeira posição de um array
pilotos.unshift('Hamilton')
console.log(pilotos)

//O método splice é capaz de adicionar e excluir elementos a partir de determinado índice
pilotos.splice(1, 0, 'Massa', 'Botas')
console.log(pilotos)

pilotos.splice(1, 1) // Massa quebrou novamente
console.log(pilotos)

//O método slice retorna um novo array que é uma fatia do array original

console.log(pilotos.slice(2))
console.log(pilotos)
console.log(pilotos.slice(1,4)) //No slice o último índice é exclusivo, ou seja, não é afetado
