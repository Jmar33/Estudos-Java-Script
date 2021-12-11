//Crie uma função que receba dois número inteiros e positivos como parâmetro
//E retorna a multiplicação entre os dois
//Detalhe, não utilize o operador de multiplicação

const multiplicar = function(num1, num2){
    newNum1 = parseInt(num1) 
    newNum2 = parseInt(num2) 

    if( newNum1 === 0 || newNum2 === 0){
        return console.log('0')
    }

    if( newNum1 < 0 || newNum2 < 0){
        return console.log('Digite apenas números positivos')
    }

    let resultadoMultiplicacao = 0
    for(let i = 0; i < newNum2; i++){
        resultadoMultiplicacao += newNum1
    }

    console.log(resultadoMultiplicacao)
}


multiplicar(5, 5)
multiplicar(0, 7)