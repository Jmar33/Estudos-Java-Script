//Por padrão o node faz cache dos módulos e objetos
//Uma forma de contornarmos isso é através das factorysFunction

module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}