//Código será executado no browser

//Só somos obrigados a passar um evento na assinatura do método, caso queiramos acessá-lo
document.getElementsByTagName('body')[0].onclick = function(e){ 
    console.log('O evento ocorreu!')
}