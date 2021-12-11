/**
 * O uso do break e continue é desencorajado pelo fato de lembrar a estrutura go to ( ou desvio de fluxo)
 * O break só haje sobre o laço for, while, ou switch mais próximo
 * Já o continue só atua sob as esruturas de repetição for e while
**/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in nums){
    if(i == 5){
        break
    }
    console.log(`${i} = ${nums[i]}`)
}

for(let y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Apesar de não ser recomendado podemos utilizar rótulos para nomear um laço for
//Os rótulos podem ser usados para sairmos de laços mais externos
externo:
for(a in nums){
    for(b in nums){
        if(a ==2 && b ==3) break externo
        console.log(`a = ${a} && b = ${b}`)
    }
}

console.log('Fim da repetição')