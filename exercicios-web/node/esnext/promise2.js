/**
 * Um ganho muito grande que tivemos com as promises foi a questão da composição
 * que facilita muita a visualiazção do código em relação as callback que por contam do 
 * aninhamento dificultam o entendimento do código
 */


//  setTimeout(function(){
//      console.log('Executando callback...')
//      setTimeout(function(){
//          console.log('Executando callback...')
//          setTimeout(function(){
//              console.log('Executando callback...')
//          }, 2000)
//      },2000)
//  }, 2000)

function esperarPor(tempo =2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor())