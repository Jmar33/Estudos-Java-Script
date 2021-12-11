//O JavaScript não da erro caso o número de parâmetros passados
//seja diferente do número de parâmetros esperados

//funcão sem retorno 

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3); 
imprimirSoma(2); // Retorna NaN
imprimirSoma(); //Retorna NaN
imprimirSoma(2, 3, 5, 10, 33, 8) //Realiza soma ignorando os parâmetros a mais

//função com retorno

function soma(a, b = 1){
    return a + b;
}

console.log(soma());
console.log(soma(2));
console.log(soma(2,10));
