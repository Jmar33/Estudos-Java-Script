/**
 * Outra vantagem da arrowFunction é que independente de quem chame a função, o "this" está sempre associado ao contexto
 * léxico que a função foi criada
 */

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new Pessoa 