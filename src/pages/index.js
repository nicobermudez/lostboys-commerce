import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Loading } from './Loading';
import Products from '../components/Products';
import SEO from '../components/SEO';

const IndexPage = () => {

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Loading />
      </Layout>
    )
}

export default IndexPage
