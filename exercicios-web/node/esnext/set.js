/**
 * O set é uma estrutura não indexada que não aceita repetições
 */

 const times = new Set()

 times.add('Corinthians')
 times.add('São Paulo').add('Palmeiras').add('Santos').add('Flamengo').add('Vasco').add('Santos')

 console.log(times)
 console.log(times.size)
 console.log(times.has('vasco'))
 console.log(times.has('Vasco'))

 //Outra forma de instanciar uma estrutura set é através de um array
 const nomes = ['João', 'Lucas', 'Ana', 'Milena', 'Guilherme', 'Milena']
 const nomesSet = new Set(nomes)
 console.log(nomesSet)