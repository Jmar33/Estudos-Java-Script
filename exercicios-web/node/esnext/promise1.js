/**
 * Uma promise é uma promeça ou seja só teremos um valor no futuro
 * Uma promise recebe como parâmetro uma função, essa função por sua vez, recebe outras duas funções como parâmetro
 * uma que será executada caso a promessa seja executada com sucesso e outra em caso de falha
 * O resultado de uma promise é um objeto, através desse objeto podemos acessar os valores retornados pela
 * promise
 */

 let a = 1 //Temos o valor imediatamente
console.log(a)

// let p = new Promise(function (cumprirPromessa){
//     cumprirPromessa(['Ana', 'Bia', 'Felipe', 'Bianca']) //Só podemos passar um parâmetro, uma forma de passar vários valores é através de objetos, ou arrays
// }) // Promises são do tipo function e retornam um Object

//Podemos encadear várias funções "then"
// p
//     .then(nomes => nomes[0])
//     .then(primeiroNome => primeiroNome[0])
//     .then(primeiraLetra => primeiraLetra.toLowerCase())
//     .then(primeiraLetraMinuscula => console.log(primeiraLetraMinuscula))

//Não necessariamente precisamos passar funções anônimas para a função then
const primeiroArrayOuString  = arrayOustring => arrayOustring[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Felipe', 'Bianca'])
})
    .then(primeiroArrayOuString)
    .then(primeiroArrayOuString)
    .then(letraMinuscula)
    .then(console.log) //Como iremos imprimir o parâmetro passado, podemos apenas passar a referência da função
