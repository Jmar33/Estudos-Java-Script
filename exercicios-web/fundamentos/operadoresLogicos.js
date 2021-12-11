// Operação bitwise é uma operação realizada bit a bit

function compras(trabalho1, trabalho2)
{
    const comprarTv50 = trabalho1 && trabalho2
    const tomarSorvete = trabalho1 || trabalho2
    //const comprarTv32 =  !!(trabalho1 ^ trabalho2) 
    const comprarTv32 =  trabalho1 != trabalho2
    const saudavel = !tomarSorvete
    return { comprarTv50, tomarSorvete, comprarTv32, saudavel}
    //Um recurso do ECMA15 é definir um objeto passando o nome da variavel uma única vez
    //assim a chave recebe o nome da varíavel o valor recebe o valor literal da varíavel
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))