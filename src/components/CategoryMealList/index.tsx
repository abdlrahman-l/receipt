import axios from 'axios'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { CategoryMeals, FavoriteMeal } from '../../types'
import Layout from '../Layout'
import SectionTitle from '../SectionTitle'
import SimpleCard from '../SimpleCard'

interface CategoryMealListProps {
    
}
 
const CategoryMealList: FunctionComponent<CategoryMealListProps> = () => {
    const { query: { category, area }, push } = useRouter()

    const [meals, setMeals] = useState<FavoriteMeal[] | null >(null)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        category &&
            axios.get<CategoryMeals>(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                .then(d => d.data.meals)
                .then(setMeals)
                .catch(() => {
                    setIsError(true)
                })

    }, [category])

    useEffect(() => {
        area &&
            axios.get<CategoryMeals>(`https://themealdb.com/api/json/v1/1/filter.php?a=${area}`)
                .then(d => d.data.meals)
                .then(setMeals)
                .catch(() => {
                    setIsError(true)
                })

    }, [area])

    if (isError) {
        return <h1>Error</h1>
    }

    return (
       <>
        <SectionTitle>Meals Based on { area ? 'Area' : 'Category' }</SectionTitle>
        <Row alignItems='center' gap='large' equalHeightRows>
            {
                 meals?.map(({ strMealThumb, strMeal, idMeal }) => (
                    <Column key={idMeal} spans={[6, 3, 2]} equalHeightChildren>
                        <SimpleCard
                            title={strMeal}
                            imageSrc={strMealThumb}
                            onClick={() => push(`/meal/?idMeal=${idMeal}`)}
                        />
                    </Column>
                ))
            }
        </Row>
       </>
    );
}
 
export default CategoryMealList;