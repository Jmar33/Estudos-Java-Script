const notas = [6.6, 9.8, 10, 7.5, 5.2, 4.6]

//Sem callback

const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
    
}

console.log(notasBaixas1)

//Com callback

notasBaixas2 = notas.filter(function(nota){ //A função filter retorna um sub array com os elementos que retornem "true"
    return nota < 7                         //para a função passada como argumento
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7 ) //Uma forma mais elegante é usando arrowFunction

console.log(notasBaixas3)