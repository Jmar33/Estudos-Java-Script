/**
 * Funções construturas em JS são semelhantes a classes em outras linguagens
 * Podemos criar atributos e métodos públicos usando a palavra reservada "this"
 */

 function Carro(velocidadeMaxima = 200, delta =5){

    //Aributo privado
    let velocidadeAtual = 0

    //Metodo público
    this.acelerar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual = velocidadeAtual + delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
 }

 //Em JS uma instância que não recebe parâmetros não precisa de ()
 const uno = new Carro
 uno.acelerar()
 console.log(uno.getVelocidadeAtual())

 const ferrari = new Carro(350, 20)
 ferrari.acelerar()
 ferrari.acelerar()
 ferrari.acelerar()
 console.log(ferrari.getVelocidadeAtual())