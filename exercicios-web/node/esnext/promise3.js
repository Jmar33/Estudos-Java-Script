/**
 * Assim a principal vantagem das promises é o encadeamento de funções que não precisame ser necessariamente assíncronas
 * 
 */

 function gerarNumero(min, max){

    if(min > max){
        [min, max] = [max, min]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
 }

 gerarNumero(1, 60)
    .then(numero => numero * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)