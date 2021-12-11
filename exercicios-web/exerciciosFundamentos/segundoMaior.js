//Crie uma função que recebe um array como parâmetro e retorna o segundo maior número presente

const segundoMaior = function(array){
    let segundoMaior = 0
    let newArray = []
     newArray = array.sort(function(num1, num2){
        return num1 - num2
    })

    segundoMaior = newArray[newArray.length - 2]
    console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])