/**
 * O método bind é o responsável por criar um amarração entre uma propriedade e uma instância
 * Como no exemplo a seguir, onde ele será usado para garantir que o atributo "this" referêncie sempre 
 * O objeto pessoa
 */

 const pessoa = {
     saudacao: 'Bom dia!',
     falar(){
         console.log(this.saudacao)
     }
 }

 pessoa.falar()
 const pessoaFalar = pessoa.falar
 pessoaFalar() // conflito entre o paradigma funcional e OO

 const novaPessoaFalar = pessoa.falar.bind(pessoa) //O método bind faz com que o "this" sempre referencie a instância de pessoa
 novaPessoaFalar()                                 //mas sem alterar o método "pessoa.falar" original
 
