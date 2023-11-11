// src/App.js
import React from 'react';
import './App.css';
import DetalleProducto from './components/DetalleProducto';

const producto = {
  nombre: 'Producto Ejemplo MICROFONO SHURE',
  descripcion: 'Descripción del producto va aquí. Compra ya tu increible Microfono Shure',
  precio: 145000,
  sku: 'ARG123',
  cantidad: 100,
  imagen: 'producto.jpg',
};

function App() {
  return (
    <div className="App">
      <DetalleProducto producto={producto} />
    </div>
  );
}

export default App;
