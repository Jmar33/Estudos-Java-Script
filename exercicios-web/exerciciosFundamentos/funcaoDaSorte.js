// Crie uma função que receba como parâmetro um número entre 1 e 10 
// Deve ser gerado um número aleatório, caso o número passado como parâmetro
// for igual ao número aleatório deve ser retornado "parabéns"
// caso contrário, devemos exibir: "Que pena! O número sorteado foi o X", onde X é o 
// número aleatório

const funcaoDaSorte = function(numero){

    const numeroDaSorte = Math.floor((Math.random() * 10) + 1)

    if(numeroDaSorte === numero){
        console.log(`Parabéns! O número sorteado foi o ${numeroDaSorte}`)
        return
    }

    console.log(`Que pena! O número sorteado foi o ${numeroDaSorte}`)

}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)