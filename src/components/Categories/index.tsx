import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { fetchCategories, selectCategories, selectCategoriesLoaded } from '../../redux/categories'
import Layout from '../Layout'
import SectionTitle from '../SectionTitle'
import SimpleCard from '../SimpleCard'
import { CardWrapper } from './styles'

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)
    const isLoaded = useSelector(selectCategoriesLoaded)


    const { push } = useRouter()

    useEffect(() => {
      dispatch(fetchCategories)
    }, [])

    if (!isLoaded) {
        return null
    }
    
    return (
        <Layout>
            <SectionTitle>Categories</SectionTitle>
            <Row alignItems='center' gap='large'>
                    {
                        categories?.map(({ strCategory, strCategoryThumb, idCategory }) => (
                            <Column key={idCategory} spans={[6, 3, 2]}>
                                <SimpleCard
                                    title={strCategory}
                                    imageSrc={strCategoryThumb}
                                    onClick={() => push(`/categoryMeals?category=${strCategory}`)}
                                />
                            </Column>
                        ))
                    }
            </Row>
        </Layout>
    )
}

export default Categories
