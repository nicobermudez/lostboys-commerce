import React from 'react'
import App from './App'
import SEO from '../components/SEO'
import Products from '../components/Products'

const IndexPage = () => (
  <App>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Products />
  </App>
)

export default IndexPage
