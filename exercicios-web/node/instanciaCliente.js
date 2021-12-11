const instanciaA = require('./instanciUnica')
const instanciaB = require('./instanciUnica')


const instanciaC = require('./instanciaNova')()
const instanciaD = require('./instanciaNova')()

instanciaA.inc()
instanciaA.inc()
console.log(instanciaA.valor, instanciaB.valor) //Por cont do cache do node ao incrementarmos a instância A, a instância B
    //também acaba sendo afetada

instanciaC.inc()
instanciaC.inc()
console.log(instanciaC.valor, instanciaD.valor) //Já quando trabalhamos com factoryFunctions uma nova instância é criada a cada chamada
        //assim, temos dois objetos independentes

