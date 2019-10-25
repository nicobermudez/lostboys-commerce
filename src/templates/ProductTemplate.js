import React from 'react'
import App from '../pages/App'
import ProductPage from '../components/ProductPage'

const ItemTemplate = ({ pageContext: { id } }) => {
  return (
    <App>
      <ProductPage productId={id} />
    </App>
  )
}

export default ItemTemplate