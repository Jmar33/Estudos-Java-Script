//Crie uma função que recebe um objeto como parâmetro e inverte as posições de "chave" e valor

const inverterObjeto = function(objeto){

    let newObject = {}

    Object.entries(objeto).forEach(element => {
        Object.defineProperty(newObject, element[1], {
            value: element[0],
            enumerable: true
        })
    });

    console.log(newObject)
}

inverterObjeto({a: 1, b: 2, c: 3})