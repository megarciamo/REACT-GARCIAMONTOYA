import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ( {greeting} ) => {
  return (
    <>
    <div className='greeting text-2xl text-center' >{greeting}</div>
    <Item title={'tornillo'} price={400} />
    <ItemList/>

    </>
  )
}

export default ItemListContainer