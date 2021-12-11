//Podemos usar o operador rest/spreed para juntar/separar os elementos de um array
//ou de um objeto

//Operador spreed em um objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario} //estamos espalhandos os atributos do elemento funcionario
                                        //como atributos do objeto clone
console.log(Object.entries(clone))


//Operador spreed em um array
const nomes = ['Gabriela', 'Joaquim', 'Guilherme']
const maisNomes = ['Rafaela', ...nomes]
console.log(maisNomes)