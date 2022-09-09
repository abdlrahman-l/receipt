import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'
import Search from '../components/Search'
import SimpleHeader from '../components/SimpleHeader'
import RandomMeal from '../components/RandomMeal'
import AreaList from '../components/AreaList'

export default function Home() {
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
        <Categories />
        <AreaList />
      </main>
    </div>
  )
}
