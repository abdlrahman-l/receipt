import axios from 'axios'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { fetchCategories, selectCategories, selectCategoriesLoaded } from '../../redux/categories'
import { Categories, Category } from '../../types'
import Layout from '../Layout'
import SectionTitle from '../SectionTitle'
import SimpleCard from '../SimpleCard'

const CategoriesComp = ({ categories }) => {
    const dispatch = useDispatch()
    // const categories = useSelector(selectCategories)
    const isLoaded = useSelector(selectCategoriesLoaded)


    const { push } = useRouter()

    // useEffect(() => {
    //   dispatch(fetchCategories)
    // }, [])

    // if (!isLoaded) {
    //     return null
    // }
    
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

export default CategoriesComp
