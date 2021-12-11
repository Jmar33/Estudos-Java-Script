//Crie uma função que retorna a idade de uma pessoa em dias, desconsiderando os dias depois do último aniversário
//considerando todos os dias com 365 dias

function idadeEmDias(idade){
    return idade * 365
}


const idadeEmDias2 = idade => idade * 365

console.log(idadeEmDias(18))
console.log(idadeEmDias2(22))