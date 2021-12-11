//Crie uma função que recebe um array de números e retorna o menor número 
//do array

const menorNumero = function(array){

    console.log(array.reduce((num1, num2) => num1 < num2 ? num1 : num2))

}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])