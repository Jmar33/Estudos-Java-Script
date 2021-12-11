//Quando um código if não possui um bloco, será executado apenas a primeira sentença de código

function teste(num){
    if(num > 7)
        console.log(num)
        console.log('final')
}

teste(6)
teste(8)

function teste2(num){
    if(num > 7);{//Cuidado com o ponto e vígular, pois podemos acabar associando o if a uma sentença vazia
        console.log(num)
    }
}

teste2(6)
teste2(8)