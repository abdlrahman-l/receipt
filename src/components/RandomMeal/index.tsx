import axios from 'axios'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { Meal, Meals } from '../../types'
import Layout from '../Layout'
import SectionTitle from '../SectionTitle'
import SimpleCard from '../SimpleCard'

const RandomMeal: FunctionComponent = () => {
    const router = useRouter()

    const [mealDetails, setMealDetails] = useState<Meal | null>(null)
    const [isError, setIsError] = useState(false)

    const ref = useRef(null)
    const firstCall = useRef(null)

    useEffect(() => {
        const fetch = () => axios.get<Meals>('https://themealdb.com/api/json/v1/1/random.php')
        .then(d => d.data.meals?.[0])
        .then(m => {
            firstCall.current = true
            setMealDetails(m)
        })
        .catch(() => {
            setIsError(true)
        })

        ref.current = setInterval(fetch, 3 * 60 * 1000)

        if (!firstCall.current) {
            fetch()
        }

        return () => {
            if (ref.current) {
                clearInterval(ref.current)
            }
        }

    }, [])

    if (isError) {
        return <h1>Error</h1>
    }

    return (
        <Layout>
            <SectionTitle>Random Meal</SectionTitle>
            {
                mealDetails &&
                <Row>
                    <Column spans={[12,6,2]}>
                        <SimpleCard
                         imageSrc={mealDetails.strMealThumb}
                         title={mealDetails.strMeal}
                         onClick={() => router.push(`/meal?idMeal=${mealDetails.idMeal}`)}
                        />
                    </Column>
                </Row>
            }
        </Layout>
    )
}
 
export default RandomMeal;