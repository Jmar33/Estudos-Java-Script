// O operador destructuring nos permite extrair elementos de uma struct, seja ela um array ou 
// objeto e armazenar esse valores diretamente em variáveis

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Muito Legal',
        numero: 1000
    }
}

let {nome, idade} = pessoa;
console.log(nome, idade);
// Podemos trocar o nome das variáveis que recebem o nome dos elementos extraídos
let {nome: n, idade: i} = pessoa;
console.log(n, i);
// Podemos setar valores padrão para evitar o  valor 'undefined'
let {sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado);
//Podemos extrair valores a partir de objetos aninhados
let {endereco:{logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);
// Só podemos acessar elementos "undefined" se esses forem os dados finais, caso o caminho que estamos tentando
// acessar esteja nulo ou undefined iremos obter um erro 
//let { conta: {ag, numero}} = pessoa;
//console.log(ag, numero); 