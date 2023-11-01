import './App.css'
import React, { useState } from 'react';
import Card from './components/Card'

function App() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleInputChange1 = (x) => {
    setInput1(x.target.value.trimStart());
  };

  const handleInputChange2 = (x) => {
    setInput2(x.target.value);
  };


  const handleSubmit = (x) => {
    x.preventDefault();
    if (input1.length < 3 || input1.startsWith(' ') || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
    }
  };

  return (
      <div className='App' style={{background: '#646cffaa'}}>
        <h1>Formulario de Tematica de Animales</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Elige un Animal:</label>
          <input type="text" value={input1} onChange={handleInputChange1} placeholder='Ingresa el nombre'/>
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={input2} onChange={handleInputChange2} placeholder='Descripcion del Animal'/>
        </div>
        <button type="submit">Enviar</button>

        </form>

        {error && <p style={{ color: 'blue' }}>{error}</p>}
        {showCard && <Card input1={input1} input2={input2} />}
        <Card input1={input1} input2={input2} />
        
      </div>
  )
}

export default App
