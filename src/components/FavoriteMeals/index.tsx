import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { GlobalState } from '../../config/root-reducer'
import { selectFavoriteMeals } from '../../redux/persist'
import { FavoriteMeal, Meal } from '../../types'
import SectionTitle from '../SectionTitle'
import SimpleCard from '../SimpleCard'

interface FavoriteMealsProps {
    
}
 
const FavoriteMeals: FunctionComponent<FavoriteMealsProps> = () => {
    const favoriteMeals = useSelector(selectFavoriteMeals)
    const { push } = useRouter()

    return (
       <>
        <SectionTitle>My Favorite Meals</SectionTitle>
        <Row alignItems='center' gap='large' equalHeightRows>
            {
                favoriteMeals?.map(({ strMealThumb, strMeal, idMeal }) => (
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
 
export default FavoriteMeals;