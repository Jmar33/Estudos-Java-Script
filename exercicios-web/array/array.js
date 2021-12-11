//Em JS o array é um objeto, não existindo o tipo array nativo
//Um array em JS pode receber valores de diferentes tipos
//Mas essa não é uma prática recomendada

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados)

aprovados = new Array('Ana', 'Carlos', 'Bia')
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //Ao acessar um índice que não existe em JS
                          //recebemos o retorno 'undefined' ao invés de um erro como em outras linguagens

//Adicionando Elementos a um array
aprovados[3] = 'Paulo'   
aprovados.push('Maria') 

aprovados[9] = 'Rafael' 
console.log(aprovados)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()    //O método sort ordena e altera o array original
console.log(aprovados)
console.log(aprovados.length)

delete aprovados[9] //deleta um elemento do array, o delete atribui "udefined" ao elemento do array
console.log(aprovados)
delete aprovados[1]
console.log(aprovados) 
console.log(aprovados.length)

//O método splice é utilizado para remover e adicionar elementos de um array
aprovados = ['João', 'Ana', 'Joaquina']
aprovados.splice(1,2) // O primeiro parâmetro define o índice a partir do qual iremos trabalhar
console.log(aprovados)//O segundo parâmtro informa quantos elementos serão excluídos do terceiro 
                      //parâmetro em diante definimos quais elementos serão acrescentados a partir do índice informado no primeiro parâmetro
                      //O fato de um array ser constante significa que sua posição de memória é constante, e não necessariamente seus elementos
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)

aprovados.splice(1, 2, 'Ana')
console.log(aprovados)
aprovados.splice(2, 0, 'Carlos')
console.log(aprovados)