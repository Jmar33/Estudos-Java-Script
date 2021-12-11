/**
 * Quando temos um erro em uma promise esse pode ser tratado por meio de uma função reject
 * A função reject pode ser invocada por meio do método catch
 * Podemos tratar o erro ocorrido em uma chamada "then" específica ou através um catch geral
 * A partir do momento que tratamos o erro, nenhum valor é mais passado entre as funções "then"
 * Assim damos preferência em deixar o método "then" por último
 * Um erro sempre irá ser tratado pelo primeiro tratamento disponível
 */

const { captureRejectionSymbol } = require('events')

 function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            //con.log('Vai dar erro')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
       
    })

 }

 funcionarOuNao('Testando...', 0.1)
    .then(valor => `Valor: ${valor}`)
    .then( 
        v => consoe.log(v), 
        err => console.log(`Erro esp.: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(erro =>console.log(`Erro Geral: ${erro}`))
    .then(() => console.log('FIM!'))