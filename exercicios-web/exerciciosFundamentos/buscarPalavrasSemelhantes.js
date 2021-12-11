//Crie uma função que receberá dois parâmetros, o primeiro será uma string e o segundo um array, 
//A função deverá filtrar as palavras do array que contém a string passado no primeiro parâmetro

const buscarPalavrasSemelhantes = function(busca, arrayDePalavras){
    
    let palavrasFiltradas = []

    palavrasFiltradas = palavrasFiltradas.concat(arrayDePalavras.filter(palavra => palavra.includes(busca)))

    console.log(palavrasFiltradas)

}

buscarPalavrasSemelhantes('pro', ['programacao', 'mobile', 'profissional'])
buscarPalavrasSemelhantes('python', ['JavaScript', 'C++', 'Android'])

