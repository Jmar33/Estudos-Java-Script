//Acessar o scopo global do node é algo que não deve ser feito, mas que pode ser útil em raras exceções

globalThis.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal!'
})
