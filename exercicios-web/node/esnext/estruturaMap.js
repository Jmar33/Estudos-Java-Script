/**
 * A estrutura MAP é bastante semelhante a um objeto, porém com chaves dinâmicas
 * Suas chaves podem ser objetos, funções, arrays...
 * MAP possuem chave únicas, logo não é possível ter duas chaves iguais
 */

 const tecnologias = new Map()
 tecnologias.set('react', {framework: false})
 tecnologias.set('angular', {framework: true})


 console.log(tecnologias.react) //Só é possível acessar atributos de um MAP através do método get
 console.log(tecnologias.get('react').framework)

 const chavesVariadas = new Map([
    [[], 'Array'],
    [{}, 'Objeto'],
    [123, 'Numero']
 ])
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')

console.log(chavesVariadas.size)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas)
 console.log(chavesVariadas.get(123))