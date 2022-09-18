import React from 'react'

import { Layout } from '../components/Layout/styles'
import Fact from '../components/Fact'
import Toggle from '../components/Toggle'
import Reload from '../components/Reload'

const Home = () => {
  return (
    <>
      <Layout>
        <Toggle />
        <Reload />
        <Fact />
      </Layout>
    </>
  )
}

export default Home
