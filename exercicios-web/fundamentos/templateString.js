const nome = "Rebeca";
const concatenacao = 'Olá ' + nome;
//template string considera tabulações e quebras de linha
const template = `
    Olá
    ${nome}`;

console.log(concatenacao);
console.log(template);
//template string permite a interpolação de strings
console.log(`1+1 = ${1 + 1}`);

//Além disso podemos utilizar expressões e funções
const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`);