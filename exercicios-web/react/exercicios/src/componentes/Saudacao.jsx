import React, { Component } from 'react'

export default class Saudacao extends Component{

    //Cada instância de um componente tem o seu próprio estado 
    state = {
        tipo : this.props.tipo,
        nome: this.props.nome
    }

    constructor(props){
        super(props)

        //Devemos usar a função bind para associar 
        //o operador this a de fato a instância do nosso componente
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
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
                <input type="text" placeholder='Tipo...' value={tipo} onChange={this.setTipo}></input>
                <input type="text" placeholder='Nome...' value={nome} onChange={this.setNome}></input>
            </div>
        )
    }
}