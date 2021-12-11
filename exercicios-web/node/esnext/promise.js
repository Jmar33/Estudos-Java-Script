//Promise ou promeça em Java Script s]ao funções que poderão ocorrer após um tempo e acontencem de forma 
//assíncrona, recebem como parâmetro um resolve, caso a promeça seja cumprida e um reject, caso seja rejeitada
//A função resolve é invocada através do método then, enquanto a reject através do método catch
//A função resolve aceita somente um parâmetro que será passado para o método then
//Podemos encadear vários métodos then, enquanto apenas um método catch será executado em caso de erro


function falaDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            reject(frase)
        }, segundos * 1000) //Por padrão a função setTimeout recebe um tempo em ms
    })
}

falaDepoisDe(3, 'Que Legal')
    .then((frase) =>{
        return frase.concat('!?!')
    })
    .then(outraFrase => console.log(outraFrase))


// falaDepoisDe(3, 'Que Legal')
// .catch((frase) =>{
//     console.log(frase)
// })
  