import React from 'react'

const Saludo = ( {name, lastname, fn, children} ) => {
    
    if (fn) {
        fn()
    }

  return (

    <>
        <h1 className='font-mono text-3xl underline fontbold my-5'>Saludos a: {name} {lastname}</h1>
         {children && children[2]}
    </>
    
  )
}

export default Saludo