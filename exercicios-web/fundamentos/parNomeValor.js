// par nome/Valor
const saudacao = 'Olá'; // contexto lexico 1

function exec(){
    const saudacao = 'Eaaaeee!'; //contexto lexico 2
    return saudacao;
}

// Objetos são grupos aninhados de nome/Valor
const cliente = {
    nome: 'José',
    idade: 32,
    peso: 70,
    endereco: {
        logradouro: 'Muito Legal',
        numero: 123
    }

}

console.log(saudacao);
console.log(exec());
console.log(cliente);
// Contexto lexico está relacionado com a posição onde a variável está escrita
// chaves podem ter o mesmo nome desde que estejam em contextos diferentes