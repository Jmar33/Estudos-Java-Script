/**
 * No JS as funções construturas são mais comumente usadas do que as classes 
 * classes costumam ser usadas no React e Angular, por exemplo
 * No fundo classes são uma forma diferente de se escrever uma função
 */
class Lancamento{
    constructor(nome = 'Genérico', valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano,
        this.lancementos = []
    }

    addLancamentos(...lancamentos) // O operador "..." nos permite adicionar parâmetros variadas que serão concatenados em um array
    {
      lancamentos.forEach(l => this.lancementos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancementos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }


}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(1, 2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

