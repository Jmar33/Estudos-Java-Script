//Arrow Functions são um recurso do ECMASCRIPT15 que nos permite escrever um função em uma única 
//linha e quando não usamos o corpo da função, temos o retorno implícito, já quando a função 
//possui corpo, somos obrigados a usar a palavra "return"

const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function contexto léxico(this)
//O this de uma Arrow Function sempre aponta para exports ou module.exports
// e não podemos usar o bind para associá-la a outro objeto, diferente de uma função tradicional
const lexico1 = () => console.log(this === exports)
lexico1()
const lexico2 = lexico1.bind({})
lexico2()

//parâmetro default
function log(texto = 'node'){
    console.log(texto)
}

log() //O parâmetro default é utilizado caso não passemos nenhum parâmetro ou o parâmetro passado seja undefined
log(undefined)
log('Sou mais forte')

//operador rest
//O operador rest uni todos os parâmetros passados em um único array
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))