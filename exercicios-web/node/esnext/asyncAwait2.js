/**
 * O await é uma palavra reservada que faz com que um código assíncrono se comporte de forma semelhante 
 * a um código síncrono
 * A palavra reservada await só pode ser usada em promises e a partir de funções que tenham sido marcadas com a 
 * palavra async
 * O valor retornado por uma fução async só pode ser acessado através do método "then"
 * O resultado de uma função async é uma promise e a palavra await é capaz de extrair o valor
 */

function esperarPor(tempo =2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

function geraValor(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(10)
        }, 5000)
    })
}


async function geraValorRapido(){
    return 20
}

async function executar(){

    const valor  = await geraValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()