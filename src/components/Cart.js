import React, { useContext, useState } from 'react'
import { CartContext } from './CartProvider'
import Checkout from './Checkout'
import CartItem from './CartItem'
import { Button, Drawer, Icon } from "antd"
import "antd/dist/antd.css"

const Cart = () => {
  const { cart, count } = useContext(CartContext)
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
      setVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer} block style={{ width: "100px"}}>
        <Icon type="shopping-cart" style={{ fontSize: "32px", color: "black" }} />
      </Button>
      <Drawer
        title="Checkout"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <h1>Cart</h1>
        {count === 0 && <span>No items in cart.</span>}
        {cart.map(([sku, quantity]) => (
          <CartItem key={sku.id} sku={sku} quantity={quantity} />
        ))}
        <Checkout />
      </Drawer>
    </>
  )
}

export default Cart
