//Crie uma função que recebe uma palavra como parâmetro e retorna a mesma palavra porém sem as vogais

const removerVogais = function(palavra)
{
    palavraMinuscula = palavra.toLowerCase()
    let novaPalavra = ''

    for(let i = 0; i < palavraMinuscula.length; i++){

        switch(palavra[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                continue
            default:
                novaPalavra = novaPalavra.concat(palavra[i])
        }
    }

    console.log(novaPalavra)
}


removerVogais('Cod3r')
removerVogais('Fundamentos')