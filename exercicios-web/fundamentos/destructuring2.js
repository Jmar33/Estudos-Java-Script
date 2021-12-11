// É preciso saber diferenciar quando estamos criando um vetor / obejto e quando estamos usando o operador de 
// destructuring

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0]  = [10, 0, 9, 7];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[8, 9, 7], [9, 6, 7]];
console.log(nota);

const nota2= [[8, 9, 7], [9, 6, 7]];
const nota3 = nota2[1][1];
console.log(nota3);