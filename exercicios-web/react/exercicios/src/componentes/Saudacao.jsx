import React, { Component } from 'react'

export default class Saudacao extends Component{

    // As propriedades acessadas por meio de this.props são read only
    // Assim não podem ser alteradas
    
    //A única forma de alterarmos as propriedades de um componente 
    //é por meio da mudança de estado
    state = {
        tipo : this.props.tipo,
        nome: this.props.nome
    }


    setTipo(e){
        this.setState({tipo: e.target.value})
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }

    render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                {/* Somente podemos alterar o valor de um input se estivermos escutando o evento onChange */}
                <input type="text" placeholder='Tipo...' value={tipo} onChange={e => this.setTipo(e)}></input>
                <input type="text" placeholder='Nome...' value={nome} onChange={e => this.setNome(e)}></input>
            </div>
        )
    }
}