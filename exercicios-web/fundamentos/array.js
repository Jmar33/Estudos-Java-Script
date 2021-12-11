/*
    No JS o array é do tipo object 
    Sendo uma estrutura heterogenia, pois pode conter elementos
    de vários tipos.
    O tamanho do array diferente de outras linguagens é variável
*/ 

let valores = [7.7, 8.9, 9.2, 10];
console.log(valores[0], valores[3]);

console.log(valores[4]);

valores[4] = 11;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

valores.pop();
console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);

