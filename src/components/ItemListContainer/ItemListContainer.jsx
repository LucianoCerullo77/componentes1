import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemListContainer = () => {
    const {greeting, products, productsCounter} = props
  return (
    <h1>{greeting}</h1>
    <h2>{products}</h2>
    <ItemCounter productsCounter={ItemCounter}/>
  )
}

export default ItemListContainer