/**
 * Em JS não existem de fato atributos privados, mas usamos uma convenção
 * onde o "_" simboliza um atributo privado
 * Uma forma de encapsularmos propriedades é através dos métodos "getters/setters"
 * Diferente de outras linguagens o JS não suporta sobrecargas de métodos 
 * a não ser na questão dos getters/setters
 */

 const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }

 }

 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 1000 
 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 900
 console.log(sequencia.valor, sequencia.valor)