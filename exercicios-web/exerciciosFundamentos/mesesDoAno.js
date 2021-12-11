// Crie uma função que recebe um número entre 1 e 12 como parâmetro e retorne o mês do ano correspondente, por exemplo, 
// se digitarmos 2, deveremos receber como retorno "fevereiro", já que esse é o segundo mês do ano

function mesDoAno(mes){
    switch(mes){
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
           break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
    }
}

console.log(mesDoAno(2))