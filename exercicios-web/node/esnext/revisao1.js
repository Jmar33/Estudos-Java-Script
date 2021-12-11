//A partir do ECMASCRIPT15 é possível declarar variáveis com a palavra reservada "let" e constantes usando 
//a palavra "const"

{
    var a  = 1
    let b = 2
}

console.log(a)
//console.log(b) Variáveis declaradas como "let" possuem scopo de bloco, logo não podem ser acessadas
//fora do bloco que foram declaradas, diferentes de variáveis do tipo "var", que possuem scopo global


const produto = 'Ipad'
console.log(`O
${produto}
é caro`) //Template string acessado a partir do back ticket 

//Destructing é a propriedade que nos permite descontruir um srting, array, objeto ou qualquer elemento iterável
//em variáveis

const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const {idade: i, nome} = {nome: 'Ana', idade: 20}
console.log(nome, i)