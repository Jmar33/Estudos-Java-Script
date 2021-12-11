/**
 * A função reduce é capaz de reduzir um array a um único elmento, que pode ser uma variável, um novo array, ou um objeto
 * A função reduce recebe como parâmetros uma função callback, essa função por sua vez recebe dois parâmetros, um acumulador 
 * e o valor atual
 * Além disso podemos passar um valor inicial para o acumulador, caso o contrário, ele receberá o primeiro elemento do array
 * O principal objetivo do reduce, como o próprio nome nos diz é reduzir o array
 */

 const alunos = [
     {nome: 'José', nota: 8.9, bolsista: true},
     {nome: 'Maria', nota: 10, bolsista: false},
     {nome: 'Joana', nota: 7, bolsista: false},
     {nome: 'Joaquim', nota: 5.0, bolsista: true}
 ]

 const nota = a => a.nota

 //Quando nao passamos o valor inicial o primeiro valor do acumulador é o próprio 
 //elemento 0 do array
 const somaNotas = alunos.map(nota).reduce(function(acumulador, atual){
     console.log(acumulador, atual)
     return acumulador + atual
 })

 console.log(somaNotas)

 //Exemplo passando um valor inicial para o acumulador

 const somandoNotas = alunos.map(nota).reduce(function(acumulador, atual){
     console.log(acumulador, atual)
     return acumulador + atual
 }, 0)

 console.log(somandoNotas)

