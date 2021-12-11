//Tanto a variável "this", como "exports" fazem referência a "module.exports", mas somente essa última corresponde ao objeto 
//que será de fato exportado
console.log(module.exports === this)
console.log(module.exports === exports)

module.exports = {
    a: 1,
    b: 2,
    c: 3
}

exports = null
console.log(module.exports)

exports = 'olá'
console.log(module.exports)