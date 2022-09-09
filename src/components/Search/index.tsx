import axios from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { debounce } from 'throttle-debounce'

import { Meal, Meals } from '../../types'
import SectionTitle from '../SectionTitle'
import { SearchWrapper } from './styles'

const Search = () => {
    const [suggestions, setSuggestions] = useState<Meal[] | null>(null)
    const [keyword, setKeyword] = useState<string | null>(null)
    const [isError, setIsError] = useState(false)

    const { push } = useRouter()

    const onChange = debounce(600,({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setKeyword(value)
    }, { atBegin: false })

    useEffect(() => {
        keyword && keyword !== '' &&
            axios.get<Meals>(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
                .then(d => d.data.meals)
                .then(setSuggestions)
                .catch(() => {
                    setIsError(true)
                })
    }, [keyword])

    if (isError) {
        return <p>Error</p>
    }

    return (
        <SearchWrapper>
            <SectionTitle>Search meal</SectionTitle>
            <input onChange={onChange}/>
                {
                   keyword && suggestions && suggestions.length > 0 &&
                   <ol className='suggestions-wrapper'>
                   { suggestions?.map(m => (
                        <li key={m.idMeal} onClick={() => 
                            push(`/meal/?idMeal=${m.idMeal}`)
                        }>
                            <img src={m.strMealThumb}></img>
                            <h4>{ m.strMeal }</h4>
                        </li>
                   )) }
                   </ol>
                }
        </SearchWrapper>
    )
}
 
export default Search;