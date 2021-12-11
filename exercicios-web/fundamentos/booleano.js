let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Para que um valor diferente de true e false
//seja considerado um bool é necessário que esse 
//esteja num contexto adequado que pode ser forçado 
//utilizando o operador "!!" que é a "negação da negação"
isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros...');
console.log(!!1);//números diferentes de zero
console.log(!!-1);
console.log(!!' ');//qualquer string não vazia
console.log(!!'texto');
console.log(!![]);//array vazio
console.log(!!{});//objeto vazio
console.log(!!Infinity);//valor infinito
console.log(true);//literal true
console.log(!!(isAtivo = true));//expressão que resulte em true

console.log('Os falsos...');
console.log(!!0);
console.log(!!null);// o valor nulo é considerado como false
console.log(!!'');// string vazia é considerada false 
console.log(false);
console.log(!!NaN); //Not a Number é tratado como false
console.log(!!undefined);// Assim como o undefined
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || 'epa')); //retorna o resultado da expressão 

let nome = '';
console.log(nome || 'Desconhecido'); //retorna o valor do primeiro true

