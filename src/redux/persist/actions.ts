import { FavoriteMeal } from '../../types'
import { SET_COMMENT, SET_FAVORITE_MEAL } from './constants'

export type PERSIST_ACTION_TYPE = 'SET_FAVORITE_MEAL' | 'SET_COMMENT' | 'REMOVE_FAVORITE_MEAL'

export type SetCommentPayload = {
  mealId: string;
  comment: string;
  name: string;
}

export type SetFavoritePayload = FavoriteMeal

export type SetFavoriteMealAction = {
  type: 'SET_FAVORITE_MEAL';
  payload: SetFavoritePayload;
}

export type SetCommentAction = {
  type: 'SET_COMMENT';
  payload: SetCommentPayload;
}

export type RemoveFavoriteMealAction = {
  type: 'REMOVE_FAVORITE_MEAL';
  payload: Pick<SetCommentPayload, 'mealId'>;
}

export type PERSIST_ACTION = SetFavoriteMealAction | SetCommentAction | RemoveFavoriteMealAction


export const setFavoriteMeal = (meal: FavoriteMeal): PERSIST_ACTION => ({
  type: 'SET_FAVORITE_MEAL',
  payload: {
    ...meal
  }
})

export const removeFavoriteMeal = (mealId: string): PERSIST_ACTION => ({
  type: 'REMOVE_FAVORITE_MEAL',
  payload: {
    mealId
  }
})

export const setComment = (payload: SetCommentPayload): PERSIST_ACTION => ({
  type: 'SET_COMMENT',
  payload
})