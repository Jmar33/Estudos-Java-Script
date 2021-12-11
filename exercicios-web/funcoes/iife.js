//IIFE -> Immeadiately Invoked Function Expression
//Ou função auto invocada, é uma função que é executada assim
//que o script é lido
//Uma das suas vantagens é o fato de não tocar o escopo global

(function(){
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente')
})()