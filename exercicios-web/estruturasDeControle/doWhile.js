/*
** O bloco "Do While" é uma variação do while, onde a repetição ocorre pelo menos uma vez
*/

function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 

do{
    opcao = getInteiroAleatorio( -1, 10)
    console.log(`Valor gerado ${opcao}`)
}while(opcao != -1)

console.log('Até a próxima')