import React from "react";
import style from "./fruta.module.css"

class Fruta extends React.Component {

    constructor(props){
        super()
    }

    state = {
        cantidad: 0,
        total: 0
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    shouldComponentUpdate(){
        return true
    }
    componentDidUpdate(){
        console.log(this.componentDidUpdate);
    }



    agregar = () => {
        this.setState({
            cantidad: this.state.cantidad + 1,
        })
    }

    quitar = () => {
        this.setState({
            cantidad: this.state.cantidad - 1,
        })

    }
    render(){
        return( 
            <div className={style.contenedor}>
                <h2 className="titulo">Nombre: {this.props.name}</h2>
                <p>Valor: {this.props.price}</p>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <p>Cantidad: {this.state.cantidad}</p>
                <p>Total: {this.props.price * this.state.cantidad}</p>
                <hr />
            </div>
        )
    }
}

export default Fruta