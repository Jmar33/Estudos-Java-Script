/**
 * O promiseAll é um método que recebe um array de promises e nos retorna apenas quando todas as promises
 * foram executadas
 */

 
function gerarNumero(min, max, tempo){

    if(min > max){
        [min, max] = [max, min]
    }

    return new Promise(resolve =>{
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo
  
    )})
 }

 function gerarVariosNumeros(){
     return Promise.all([
         gerarNumero(1,60, 4000),
         gerarNumero(1,60, 300),
         gerarNumero(1,60, 500),
         gerarNumero(1,60, 100),
         gerarNumero(1,60, 3000),
         gerarNumero(1,60, 150)
     ])
 }

 console.time('tempo pra gerar todas as promises')
 gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() =>{
        console.timeEnd('tempo pra gerar todas as promises')
    })
