import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';

function Card(props) {
  return (
    <div className='gap'>
    <BootstrapCard style={{ width: '18rem' }} className="colorPersonalizado">
      <BootstrapCard.Img variant="top" src={props.imagen} />
      <BootstrapCard.Body>
        <BootstrapCard.Title >{props.titulo}</BootstrapCard.Title>
        <BootstrapCard.Text>
          {props.descripcion}
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
    </div>
  )
}

export default Card