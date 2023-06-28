import React from "react";
import Fruta from "./components/Fruta";
import GranTotal from "./components/GranTotal";

const frutas = [
    {
        id:123,
        name:"Manzana",
        price: 231
    },
    {
        id:345,
        name:"Fresa",
        price: 7644
    },
    {
        id:678,
        name:"Mango",
        price: 300                      
    }
]

class App extends React.Component {
    constructor(){
        super()
        
    }
    render(){
        return (
            <>
                <h1>Carrito de frutas</h1>
                {frutas.map(fruta =>
                    <Fruta key = {fruta.id} name = {fruta.name} price = {fruta.price}/>)
                }
                <GranTotal/>
            </>
        )
    }
}

export default App 