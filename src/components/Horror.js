import React from 'react';
import './stylesheets/Horror.css';

function Horror() {
    return (
      <div className= 'contenedor-horror'>
        <img 
          className= 'imagen-horror'
          src= {require('../imagenes/horror-melies.png')}
          alt= 'Foto de horror movie'/>
        <div className= 'contenedor-texto-horror'>
          <p className='nombre-horror'>LE MANOIR DU DIABLE</p>
          <p className='dato-horror'>año 1896, dirigida y producida por Georges Méliès.</p>
          <p className='texto-horror'>Es una película muda de 1896, una auténtica obra de arte para la época, con tan solo tres minutos de duración...
          El filme trata sobre un hombre que entra a un castillo encantado y es constantemente acosado por espíritus dentro del castillo.</p>
          </div>  
      </div>
      
    );
}

export default Horror;