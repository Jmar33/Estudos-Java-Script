//Diferente de outros módulos o global não precisa ser importado, apenas carregado uma única vez, em um único arquivo
//e a partir daí passa a ser acessível por todos os arquivos da solução

require('./global')

console.log(MinhaApp.saudacao()) //Não é necessario usar o prefixo "global" antes dos objetos criados

//MinhaApp.nome = 'Eita!'  Além disso, podemos acessar e modificar os valores de um objeto em scopo global
console.log(MinhaApp.nome) //Uma forma de se evitar isso é usando o método freeze para "congelar" as propriedades do objeto