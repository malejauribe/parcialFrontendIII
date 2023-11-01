import React from 'react';

const Card = ({ input1, input2 }) => {
    return (
    <div className="card">
        <h2>Informacion del Animal</h2>
        <p>Nombre: {input1}</p>
        <p>Descripción: {input2}</p>
    </div>
    
    );
}

export default Card