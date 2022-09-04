import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ( {greeting} ) => {
  return (
    <>
    <div className='greeting text-2xl text-center' >{greeting}</div>
    <ItemCount stock={10} initial={1}/>
    </>
  )
}

export default ItemListContainer