import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './componentes/Card/Card';
import * as serviceWorker from './serviceWorker';

/**
 * 1. Strict Mode: Nos fuerza errores en el ambiente de desarrollo en el ciclo de vida del componente.
 * 2. Todas nuestras etiquetas deben cerrarse.
 * 3. Sólamente se pueda renderizar un componente.
 *   ya quesa que encerremos todo en un componente o en <></>
 * 
 *  
 
 props = {
   id: 1
 }
 
 */

ReactDOM.render(
  <React.StrictMode>

    <App id="1" color="pink">
      <Card title="La mejor card" src="https://wallpaperaccess.com/full/85323.png"/>
    </App>
    <App id="2" color="blue">
      <input type="text" placeholder="Escribe tu nombre"></input>
    </App>
    <App id="3"/>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
