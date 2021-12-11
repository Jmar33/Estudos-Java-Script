//Crie uma função que recebe dois parâmetros, o primeiro é o código que será 
//repetido. O segundo é a quantidade de repetições

const repetir = function(codigo, repeticoes){
    let array =[]
    for(let i= 0; i < repeticoes; i++){
        array.push(codigo)
    }

    return console.log(array)
}


repetir("codigo", 2)
repetir(7, 3)
