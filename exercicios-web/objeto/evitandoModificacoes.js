//Objeto.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag:'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca escolar'
delete produto.tag

//O método preventExtensions não permite adicionarmos
//novas propriedades a um objeto
//Mas podemos excluir alguma de suas propriedades

console.log(produto)

//O método seal, sela o objeto de forma que não é possível adicionar ou remover propriedades 
//Mas é possível atualizar o valor de propriedades já existentes
const pessoa = { nome: 'Ana', idade: 52}
Object.seal(pessoa)

pessoa.nome ='João'
delete pessoa.idade
pessoa.sobrenome = 'Silva'

console.log(pessoa)

//O método freeze congela o objeto de forma que não é possível
//excluir, editar ou  adicionar novas propriedades

