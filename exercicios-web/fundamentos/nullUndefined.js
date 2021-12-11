let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro;

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco =  3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
console.log(produto);

// Undefined é o valor padrão quando não atribuimos valor 
//a um variável, já o null é o valor quando nossa variável não 
// aponta para nenhuma posição de memória, o valor undefined não deve
// ser atribuído de forma explicita