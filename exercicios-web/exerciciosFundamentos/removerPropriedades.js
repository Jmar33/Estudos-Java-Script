//Crie uma função que recebe um objeto e uma propriedae como parâmetro e retorna um novo
//objeto, removendo a propriedade que foi passada como parâmetro


const removerPropriedades = function(objeto, propriedade){
    let obj = { }
    Object.assign(obj, objeto)
    delete obj[`${propriedade}`]

    return obj
}

console.log(removerPropriedades({a : 1, b: 2}, "a"))
console.log(Object.is(removerPropriedades({a : 1, b: 2}, "a"), {a : 1, b: 2}))