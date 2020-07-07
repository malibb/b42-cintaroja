import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Objeto que contiene las propiedades enviadas.
function App({ id, color, children }) {
  // Forma para definir un estado
  const colorFijo = color || 'yellow';
  const [valor, setValor] = useState(parseInt(id));
  const [background, setBackground] = useState(colorFijo);

  useEffect(() => {
    console.log('UsseEffect!', valor);
  },[]);
  
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: background }}>
      {children}
      <h1>{valor}</h1>
        <p>
          Hola Mundo!
          {/* Soy un comentario en JS dentro de código JSX */}
        </p>
      <button onClick={()=>{setValor(valor+1)}}>Aumentar :D</button>
      <button onClick={()=>{setValor(valor-1)}}>Reste :D</button>
      <button onClick={()=>{setBackground('green')}}>Cambiar Color</button>
      <button onClick={()=>{setBackground(colorFijo)}}>Volver a tu Color</button>
      </header>
    </div>
  );
}

export default App;
/**
 
 * 
 * 
 */