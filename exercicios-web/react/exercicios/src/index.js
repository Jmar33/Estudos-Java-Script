import React from 'react'
import ReactDOM from 'react-dom'

//Todos os nossos componentes devem iniciar com letra maiúscula
import BomDia from './componentes/BomDia'

//Podemos passar paramêtros para um determinado componente colocando o nome da propriedade o seu valor
//parâmetros que não são do tipo string, podem ser passados entre {}
ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))