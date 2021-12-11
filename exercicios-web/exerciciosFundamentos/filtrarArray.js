//Crie uma função que recebe um array contendo vários elementos e retorna um array contendo apenas
//os elementos do tipo númerico

const filtrarNumeros = function(array){
    let newArray = []

    newArray = newArray.concat((array.filter(elemento => typeof(elemento) === 'number')))
    console.log(newArray)
}

filtrarNumeros(['JavaScript', 12, {a: 2, b: 'Maçã'}, true, 3, "20"])
filtrarNumeros(['a', 'c'])