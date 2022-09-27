import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { fetchAreas, selectAreas, selectAreasLoaded } from '../../redux/areas'
import { Area } from '../../types'
import Layout from '../Layout'
import SectionTitle from '../SectionTitle'
import { AreaListWrapper } from './styles'

type AreaListProps = {
    readonly areas: Area[]
}

const AreaList: FunctionComponent<AreaListProps> = ({ areas }: AreaListProps ) => {
    const dispatch = useDispatch()
    // const areas = useSelector(selectAreas)
    // const isLoaded = useSelector(selectAreasLoaded)

    const { push } = useRouter()

    // useEffect(() => {
    //   dispatch(fetchAreas)
    // }, [])

    // if (!isLoaded) {
    //     return null
    // }
    
    return (
        <Layout>
            <SectionTitle>Areas</SectionTitle>
            <AreaListWrapper>
                {
                    areas?.map((a,i) => (
                        <li key={a.strArea} onClick={() => push(`/categoryMeals?area=${a.strArea}`)}>
                            <b>{i+1}. </b>{a.strArea}
                        </li>
                    ))
                }
            </AreaListWrapper>
        </Layout>
    )
}
 
export default AreaList;