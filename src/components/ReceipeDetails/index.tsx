import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { createElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import categoryIcon from '../../../public/category.svg'
import placeIcon from '../../../public/place.svg'
import { removeFavoriteMeal, selectFavoriteMeal, setFavoriteMeal } from '../../redux/persist'
import { Meal, Meals } from '../../types'
import Button from '../Button'
import CommentsSection from '../CommentsSection'
import SectionTitle from '../SectionTitle'
import { ReceipeWrapper } from './styles'

const getIngredients = (mealDetails: Meal) => {
    let element = []
    for (let index = 1; index < 20; index++) {
        const ingridient = mealDetails[`strIngredient${index}`]
        const measure = mealDetails[`strMeasure${index}`]
        ingridient &&
        ingridient !== '' &&
        ingridient !== ' ' &&
        element.push(<li><b>{index}.</b> {ingridient} <b>{measure}</b></li>)
    }

    return element
}

const ReceipeDetails = () => {
    const { query: { idMeal } } = useRouter()

    const isFavorited = useSelector(selectFavoriteMeal(idMeal as string))
    const [mealDetails, setMealDetails] = useState<Meal | null>(null)
    const [isError, setIsError] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        idMeal &&
            axios.get<Meals>(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                .then(d => d.data.meals?.[0])
                .then(setMealDetails)
                .catch(() => {
                    setIsError(true)
                })

    }, [idMeal])
    
    const onClickFavorite = () => {
        !isFavorited
        ? dispatch(setFavoriteMeal({
            idMeal: mealDetails.idMeal,
            strMeal: mealDetails.strMeal,
            strMealThumb: mealDetails.strMealThumb
        }))
        : dispatch(removeFavoriteMeal(idMeal as string))
    }

    if (isError) {
        return <h1>Error</h1>
    }

    if (!mealDetails) {
        return null
    }

    return (
        <ReceipeWrapper>
            <Row alignItems='center' gap='medium'>
                <Column spans={[12,6,6]} justifySelf='center'>
                    <div className='image-wrapper'>
                        <Image
                            src={mealDetails.strMealThumb}
                            layout='intrinsic'
                            width={400}
                            height={400}
                            objectFit='contain'
                        />
                    </div>
                </Column>
                <Column spans={[12,6,6]}>
                    <h2>{mealDetails.strMeal}</h2>
                    <div className='second-description'>
                        <Row alignItems='center'>
                            <Column spans={[6,6,6]} justifySelf='center'>
                                <div className='additional'>
                                    <Image
                                        src={categoryIcon}
                                        width='20'
                                        height='20'
                                    />
                                    <div className='additional-description'>
                                        <label className='attribute'>Category</label>
                                        <label className='value'>
                                            <Link href={`/categoryMeals?category=${mealDetails.strCategory}`}>
                                                {mealDetails.strCategory}
                                            </Link>
                                        </label>
                                    </div>
                                </div>
                            </Column>
                            <Column spans={[6,6,6]} justifySelf='center'>
                                <div className='additional'>
                                    <Image
                                        src={placeIcon}
                                        width='20'
                                        height='20'
                                    />
                                    <div className='additional-description'>
                                        <label className='attribute'>Area</label>
                                        <label className='value'>
                                            <Link href={`/categoryMeals?area=${mealDetails.strArea}`}>
                                                {mealDetails.strArea}
                                            </Link>
                                        </label>
                                    </div>
                                </div>
                            </Column>
                        </Row>
                    </div>
                    <SectionTitle>Ingridients</SectionTitle>
                    <ul>{getIngredients(mealDetails)}</ul>
                    <div className='button-wrapper'>
                        <Button onClick={onClickFavorite}>
                            {
                                isFavorited
                                ? 'Remove from favorites'
                                : 'Add to favorite'
                            }
                        </Button>
                    </div>
                </Column>
            </Row>
            <SectionTitle>Instructions</SectionTitle>
            <p dangerouslySetInnerHTML={{ __html: mealDetails.strInstructions}} />

            {
                mealDetails.strTags && 
                    <>
                        <SectionTitle>Tags</SectionTitle>
                        <p>{mealDetails.strTags}</p>
                    </>
            }

            <SectionTitle>User Comments</SectionTitle>
            <CommentsSection mealId={mealDetails.idMeal}/>
            
        </ReceipeWrapper>
    )
}
 
export default ReceipeDetails;