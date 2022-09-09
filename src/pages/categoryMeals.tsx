import Head from 'next/head'

import CategoryMealList from '../components/CategoryMealList'
import FavoriteMeals from '../components/FavoriteMeals'
import Layout from '../components/Layout'
import SimpleHeader from '../components/SimpleHeader'

export default function CategoryMeals() {
  return (
    <div>
      <Head>
        <title>Receipe App</title>
        <meta name="description" content="Explore everything receipe you want !" />
        <link rel="icon" href="/food.svg" />
      </Head>

      <SimpleHeader />
      <Layout>
        <CategoryMealList />
      </Layout>
    </div>
  )
}
