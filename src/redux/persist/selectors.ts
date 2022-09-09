import { GlobalState } from '../../config/root-reducer'
import { status } from '../../utils/redux'

export const selectFavoriteMeals = (state: GlobalState) => state.persistedReducer.favoriteMeals
export const selectFavoriteMeal = (mealId: string) => 
    (state: GlobalState) => state.persistedReducer.favoriteMeals?.find(v => mealId === v.idMeal)

export const selectComments = (mealId: string) => (state: GlobalState) => state.persistedReducer.mealComments?.[mealId] || null 

