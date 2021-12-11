//Crie uma função que recebe uma string como parâmetro e retorna quantas palavras a string possui

const contadorDePalavras =  function(string){

    let arrayDeStrings

    arrayDeStrings = string.split(' ')
    console.log(`O total de palavras digitadas foram: ${arrayDeStrings.length}`)
}


contadorDePalavras("Gosto muito de aprender a programar")
contadorDePalavras("Sou uma frase")
contadorDePalavras("Me divirto aprendendo a programar")