//O taggedTemplate nos permite manipular e alterar uma template string

function tag(partes, ...valores) {
    console.log(partes) //Array que contem as string literal
    console.log(valores) //Array que contem os valores interpolados
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`O ${aluno} esta ${situacao}`)