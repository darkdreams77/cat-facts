import React from 'react'

import Fact from '../components/Fact'
import { Layout } from '../components/Layout/styles'
import Toggle from '../components/Toggle'

const Home = () => {
  return (
    <>
      <Layout>
        <Toggle />
        <Fact />
      </Layout>
    </>
  )
}

export default Home
