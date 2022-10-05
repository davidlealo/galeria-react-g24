import React from 'react'

function Header(props) {
  return (
    <h1 className="colorPersonalizado text-center">{props.titulo}</h1>
  )
}

export default Header