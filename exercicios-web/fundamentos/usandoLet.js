// Variáveis declaradas como let, possuem três scopos: bloco, função e global

let numero = 1;
{
    let numero =2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);