import React from 'react'
import ReactDOM from 'react-dom'
//O módulo React deve ser importado sempre que houver códigos JSX's no nossos arquivos

import Primeiro from './componentes/Primeiro'

const elemento  = <h1>React 2</h1> //JSX -> JS extendido

//ReactDOM é responsável por controlar a DOM
ReactDOM.render(<Primeiro/>, document.getElementById('root'))