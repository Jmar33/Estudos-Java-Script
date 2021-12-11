// Crie uma função que recebe um array e retorna um 
// único número que é a soma dos elementos do array

const somarNumeros  = function( array){
    
    let newArray = []

    newArray = array.reduce(function(acumulador, atual){
        return acumulador + atual
    })

    console.log(newArray)

}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])