import React from 'react'
import  CartWidget  from './CartWidget'

const NavBar = () => {
  return (
    <div className='flex flex-row text-3xl'>
      <li>Inicio</li>
      <li>Productos</li>
      <li>Contacto</li>
      <li>Acerca de</li>
      <CartWidget/>

    </div>
  )
}

export default NavBar