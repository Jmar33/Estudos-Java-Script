//Função real irá aplicar uma máscara nos elementos númericos de uma template string

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    //Para reconstruirmos uma template string é necessário intercalarmos os valores de "partes" e "valores"
    //Sempre começando pelos elementos do array "partes"
    return resultado.join('')
}

const preco = 29.9
const parcela = 11
console.log(real `1X de ${preco} ou 3X de ${parcela}`)