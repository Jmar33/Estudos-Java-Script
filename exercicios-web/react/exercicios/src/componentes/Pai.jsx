import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default props => {
    return (
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>   
            <h2>Filhos</h2>
            <ul>
                {/* Uma forma de permitir que um componente receba componentes filhos é usando props.children */}
                {/* Podemos clonar um determinado elemento e fazer com que ele receba as propriedades do  
                elemento pai  e sobrescreva pela suas próprias propriedades caso necessário, porém isso não funciona bem
                quando temos mais de um elemento*/}
                {childrenWithProps(props)}
            </ul>
        </div>
    )
}