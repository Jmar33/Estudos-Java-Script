const quaseArray = {0:'Rafael', 1: 'Ana', 2: 'Gabriela'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

const array = [ 'Rafael', 'Ana', 'Gabriela']
console.log(array)
console.log(quaseArray.toString())