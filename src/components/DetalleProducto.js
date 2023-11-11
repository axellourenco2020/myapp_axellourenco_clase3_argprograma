// src/components/DetalleProducto.js
import React from 'react';
import NombreProducto from './NombreProducto';
import DescripcionProducto from './DescripcionProducto';
import InfoProducto from './InfoProducto';

const DetalleProducto = ({ producto }) => {
  return (
    <div>
      <img
        src={`/images/${producto.imagen}`}
        alt={producto.nombre}
        style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
      />
      <NombreProducto nombre={producto.nombre} />
      <DescripcionProducto descripcion={producto.descripcion} />
      <InfoProducto
        precio={producto.precio}
        sku={producto.sku}
        cantidad={producto.cantidad}
      />
    </div>
  );
};

export default DetalleProducto;
