//No JS variáveis do tipo var possuem apenas dois scopos, sendo 1 global
// e outro dentro de funções

{
    {
        {
            var valor = 'Será???';
            console.log(valor);
        }
    }
}

console.log(valor);

function imprime(){
     var local = 123;
    console.log(local);
}

imprime();
console.log(local);