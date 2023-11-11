// src/components/InfoProducto.js
import React from 'react';

const InfoProducto = ({ precio, sku, cantidad }) => {
  return (
    <div>
      <p style={{ color: 'blue', fontSize: '1.5em' }}>Precio: ${precio}</p>
      <p style={{ color: 'blue', fontSize: '1.5em' }}>SKU: {sku}</p>
      <p style={{ color: 'blue', fontSize: '1.5em' }}>Cantidad Disponible: {cantidad}</p>
    </div>
  );
};

export default InfoProducto;

