import axios from 'axios'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import AreaList from '../components/AreaList'
import CategoriesComp from '../components/Categories'
import RandomMeal from '../components/RandomMeal'
import Search from '../components/Search'
import SimpleHeader from '../components/SimpleHeader'
import { Area, Areas, Categories, Category } from '../types'

type HomeProps = {
  readonly categories: Category[],
  readonly areas: Area[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  const categories = await axios.get<Categories>('https://themealdb.com/api/json/v1/1/categories.php')
                      .then(da => da.data.categories)
            
  const areas = await axios.get<Areas>('https://themealdb.com/api/json/v1/1/list.php?a=list')
                      .then(da => da.data.meals)
        

  return {
      props: {
          categories,
          areas
      }
  }
}


export default function Home({ categories, areas }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
      <Head>
        <title>Receipe App</title>
        <meta name="description" content="Explore everything receipe you want !" />
        <link rel="icon" href="/food.svg" />
      </Head>

      <SimpleHeader />
      <main>
        <Search />
        <RandomMeal />
        <CategoriesComp categories={categories}/>
        <AreaList areas={areas}/>
      </main>
    </div>
  )
}
