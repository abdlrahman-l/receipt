import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import areas from '../redux/areas'
import categories from '../redux/categories'
import persistedReducer from '../redux/persist'
import { PersistState } from '../redux/persist/reducer'
import { Areas, Categories } from '../types'
import { CommonState, getPersistConfig } from '../utils/redux'

const dataPersist = getPersistConfig('receipt:persistedReducer', [
    'favoriteMeals',
    'mealComments'
])

export type GlobalState = {
    readonly categories: CommonState<Categories>,
    readonly persistedReducer: PersistState,
    readonly areas: CommonState<Areas>
}

const rootReducer = combineReducers<GlobalState>({
    categories,
    persistedReducer: persistReducer(dataPersist, persistedReducer),
    areas
})

export default rootReducer