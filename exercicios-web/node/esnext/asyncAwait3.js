/**
 * Em funções async o resolve da promise se dar por meio do return enquanto o reject acontece quando lançamos 
 * uma exceção com o "throw"
 */

const { reject } = require('lodash')

async function gerarNumero(min, max, numerosProibidos){

    if(min > max){
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero repetido!')
        }else{
            resolve(aleatorio)
        }
        
    })
 }


 async function gerarMegaSena(quantidade, tentativas = 1 ){

    let numeros = []
    try{
       
        for(let _ of Array(quantidade).fill()){
            numeros.push(await gerarNumero(1, 60, numeros))
        }
        return numeros

    }catch(e){
        if(tentativas > 100){
            throw "Que chato!"
        }else{
            gerarMegaSena(quantidade, tentativas+1)
        }
        
    }
  

 }

 gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)