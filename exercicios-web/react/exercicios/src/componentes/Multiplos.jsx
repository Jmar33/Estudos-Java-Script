import React from 'react'

//Podemos tanto exportar cada uma das funções de forma independente 
const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

const BoaNoite = props => <h1>Bo noite {props.nome}!</h1>

//Quanto exportar um único objeto
export {BoaTarde, BoaNoite}
export default {BoaTarde, BoaNoite}