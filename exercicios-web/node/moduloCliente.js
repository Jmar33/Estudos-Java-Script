/**
 * Uma forma de se importar arquivos no NODE é utilizando a palavra reservada
 * "require"
 */

 const moduloA = require('./moduloA')
 const moduloB = require('./moduloB')

 console.log(moduloA.ola)
 console.log(moduloA.bemVindo)
 console.log(moduloA.ateLogo)
 console.log(moduloA)

 console.log(moduloB.bomDia)
 console.log(moduloB.boaNoite())
 console.log(moduloB)
 