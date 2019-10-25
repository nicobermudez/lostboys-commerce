import React from 'react'
import styled from "@emotion/styled"
import PropTypes from 'prop-types'
import CartProvider from '../components/CartProvider'
import Footer from "../components/Footer"
import Header from '../components/Header'
import ProductsProvider from '../components/ProductsProvider'

const App = ({ children }) => (
  <>
    <ProductsProvider>
      <CartProvider>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `20px`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </CartProvider>
    </ProductsProvider>
  </>
)

export default App

App.propTypes = {
  children: PropTypes.node.isRequired
}
