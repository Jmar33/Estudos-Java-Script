import React from 'react'
import ReactDOM from 'react-dom'

//Já na hora de import podemos importar uma função expecífica usando o destructuring
//Ou acessando a função como propriedade de um objeto
import Multi, { BoaNoite } from './componentes/Multiplos'
ReactDOM.render(
    <div>
        {/* Acessando a função BoaTarde como prop do objeto Multiplos  */}
        <Multi.BoaTarde nome="Ana"/> 
        {/* Acessando a função BoaNoite a partir do operado destructuring */}
        <BoaNoite nome="Bia" />
    </div>,
    document.getElementById('root'))