/**
 * Arrow functions nos induzem a criar funções especialistas que podem ser reutilizadas
 */

let dobro = function (a){
    return 2 * a
}

//Quando utilizamos as {} para definir um bloco de código somos obrigados a usar o return
dobro = (a) =>{
    return  2 * a
}

//Um ganho da Arrow function é o retorno implícito quando temos o retorno em apenas uma linha

dobro = (a) => 2 * a

console.log(dobro(Math.PI))

let saudacao = function () {
    return 'Olá'
}

//Podemos usar os () vazios quando a nossa função não recebe parâmetros
saudacao = () => 'Olá'

saudacao = _ => 'Olá' //Outra forma é utilizando o _ que representa um parâmetro, mas que não será passado na chamada da função 

console.log(saudacao())