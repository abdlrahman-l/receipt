
import { FavoriteMeal } from '../../types'
import { RemoveFavoriteMealAction, SetCommentAction, SetFavoriteMealAction } from './actions'
import { REMOVE_FAVORITE_MEAL, SET_COMMENT, SET_FAVORITE_MEAL } from './constants'

export type PersistState = {
  readonly favoriteMeals: FavoriteMeal[] | null,
  readonly mealComments: Record<string, {
    readonly name: string,
    readonly comment: string
  }[]> | null
}

const initialState: PersistState = {
  favoriteMeals: null,
  mealComments: null
}

type Actions = {
  [SET_COMMENT]: (s: PersistState, a: SetCommentAction) => PersistState,
  [SET_FAVORITE_MEAL]: (s: PersistState, a: SetFavoriteMealAction) => PersistState,
  [REMOVE_FAVORITE_MEAL]: (s: PersistState, a: RemoveFavoriteMealAction) => PersistState
}

const Actions: Actions = {
  'SET_COMMENT': (state, { payload: { mealId, comment, name } }) => ({
    ...state,
    mealComments: {
      ...state.mealComments || {},
      [mealId]: [
        ...state.mealComments?.[mealId] || [],
        {
          comment,
          name
        }
      ]
    }
  }),
  'SET_FAVORITE_MEAL': (state, { payload }) => ({
    ...state,
    favoriteMeals: [
      ...state.favoriteMeals || [],
      payload
    ]
  }),
  'REMOVE_FAVORITE_MEAL': (state, { payload: { mealId } }) => ({
    ...state,
    favoriteMeals: [...state.favoriteMeals || []].filter(meal => meal.idMeal !== mealId)
  }),
}

const categories =
  (state = initialState, action) => 
    Actions[action.type]?.(state, action) || state

export default categories
