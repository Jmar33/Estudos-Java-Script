//O arquivo package.json é um arquivo que nos permite recriar o nosso projeto, com as dependências e suas versões
//O arquivo package pode ser criado a partir do comando npm init 
//Já o arquivo package-lock traz essas informações de uma forma comprimida, através de hash's, por exemplo
//Versões começadas com "^" podem variar a versão minor
//Versões começadas com "~" podem variar apenas o fix
//Quando não utilizamos nem o "^" e o "~" estamos definindo que será usado a versão específica
//Exemplo de versionamento: 2.4.1 --> MAJOR.MINOR.FIX

const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// axios.get(URL).then(response =>{
//     const funcionarios = response.data
//     const womansChinese = funcionarios.filter(funcionario => funcionario.genero === 'F' && funcionario.pais === 'China')
//     const lowestSalary = womansChinese.map(funcionario => funcionario.salario).reduce((menorSalario, atual) => 
//                                                                         menorSalario < atual ? menorSalario : atual)
//     console.log(lowestSalary)
//     const womanChinesesLowestSalary = womansChinese.filter(funcionario => funcionario.salario === lowestSalary)
//     console.log(womanChinesesLowestSalary)
// })

//A seguir temos outra resolução 
const mulheres = f => f.genero === 'F'
const chinesas = f => f.pais === 'China'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
} //Aqui vemo que é possível passar e receber como parâmetros um objeto completo
//ArrowFunction possui retorno implícito apenas quando não usamos { }
axios.get(URL).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    const func = funcionarios
                    .filter(mulheres)
                    .filter(chinesas)
                    .reduce(menorSalario)
    console.log(func)
})
