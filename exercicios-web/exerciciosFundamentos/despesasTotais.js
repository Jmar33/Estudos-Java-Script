//Crie uma função que recebe um array de objetos como parâmetro
//Esses objetos representam serviços e produtos, deve se somar 
//os valores e retornar o custo total das despesas

const despesasTotais = function(array){
    let newArray

    newArray = array.map(objeto => objeto.preco).reduce(function(totalDespesas, despesa){
        return totalDespesas + despesa
    })

    console.log(newArray)

}

despesasTotais([
    {nome:'Jornal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria:'Entretenimento', preco: 150}
])

despesasTotais([
    {nome: 'Galaxy s20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'Macbook', categoria: 'Eletrônicos', preco: 30999.90}
])