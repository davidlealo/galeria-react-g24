import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge';


function Footer() {
  return (
    <div className='gap'>
        <h3 className="colorPersonalizado text-center">
        Galería de imágenes. Todos los derechos reservados <Badge bg="secondary">2022</Badge>
      </h3>
    </div>
  )
}

export default Footer