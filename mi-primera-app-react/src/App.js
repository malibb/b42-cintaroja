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
    setInterval(()=>{
      setBackground("#"+((1<<24)*Math.random()|0).toString(16));
    }, 3000);
  }, []);
  
  return (
    <div className="App">
      <header><h1>Navbar</h1></header>
      <header className="App-header" style={{ backgroundColor: background }}>
      {children}
      <h5>{valor}</h5>
      
          {/* Soy un comentario en JS dentro de código JSX */}
      {/* <button onClick={()=>{setValor(valor+1)}}>Aumentar :D</button>
      <button onClick={()=>{setValor(valor-1)}}>Reste :D</button>
      <button onClick={()=>{setBackground("#"+((1<<24)*Math.random()|0).toString(16))}}>Parar cambiar Color</button>
      <button onClick={()=>{setBackground(colorFijo)}}>Volver a tu Color</button> */}
      </header>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
/**
 
 * 
 * 
 */