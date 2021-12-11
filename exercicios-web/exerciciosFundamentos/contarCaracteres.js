//Crie uma função que recebe como parâmetro uma strign e um caractere e retorne o número de vezes
//em que o caractere aparece na string

const contarCaracteres = function( caractere, frase){

    let quantidadeDeCaracteres = []
   for(let i = 0; i < frase.length; i++){
       if(frase[i] === caractere){
           quantidadeDeCaracteres++
       }
   }

    console.log(quantidadeDeCaracteres)
}

contarCaracteres( 'r', 'A sorte favorece os audazes')
contarCaracteres('c', "Conhece a ti mesmo")