import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import ReceipeDetails from '../components/ReceipeDetails'
import SimpleHeader from '../components/SimpleHeader'

export default function Meal() {
  return (
    <div>
      <Head>
        <title>Receipe App</title>
        <meta name="description" content="Explore everything receipe you want !" />
        <link rel="icon" href="/food.svg" />
      </Head>

      <SimpleHeader />
      <Layout>
        <ReceipeDetails />
      </Layout>
    </div>
  )
}
