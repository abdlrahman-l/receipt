import { Action } from 'redux'

import { Categories, Category } from '../../types'
import {
    ActionResponse, CommonActions, CommonState, failure, getActionError, getActionResponse, success
} from '../../utils/redux'
import { FETCH_CATEGORIES } from './constants'

const initialState: CommonState<Categories> = {
  data: null,
  error: {},
  status: 'PRISTINE'
}

const Actions: CommonActions<Categories> = {
  [FETCH_CATEGORIES]: (state) => ({
    ...state,
    status: 'FETCHING'
  }),
  [failure(FETCH_CATEGORIES)]: (state, action) => ({
    ...state,
    status: 'ERROR',
    error: getActionError(action)
  }),
  [success(FETCH_CATEGORIES)]: (state, action) => ({
    ...state,
    status: 'LOADED',
    error: false,
    data: getActionResponse(action)
  })
}

const categories =
  (state = initialState, action: ActionResponse<Categories>) => 
    Actions[action.type]?.(state, action) || state

export default categories
