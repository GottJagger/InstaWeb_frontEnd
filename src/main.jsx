import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* const var_1 = "hola desde ReactDOM" */

//se crea una clase que hereda de react.component
/* 
class Fruta extends React.Component {
  
  render(){
    return <h1>Hola1</h1>
  }
} */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  <h1>{var_1}{console.log("hola terminar")}</h1>*/}
    {/* instanciar una clase dentro de HTML */}
    {/* <Fruta/> */}

    <App/>
  </React.StrictMode>,
)
