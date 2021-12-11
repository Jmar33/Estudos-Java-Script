//O operador ternário recebe esse nome
//por envolver ter operandos, seguindo a sintaxe:
// expressão_lógica ? 'ValorSeVerdadeiro' : 'ValorSeFalso'

const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.8))