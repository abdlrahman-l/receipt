import { Action } from 'redux'

import { Areas } from '../../types'
import {
    ActionResponse, CommonActions, CommonState, failure, getActionError, getActionResponse, success
} from '../../utils/redux'
import { FETCH_AREAS } from './constants'

const initialState: CommonState<Areas> = {
  data: null,
  error: {},
  status: 'PRISTINE'
}

const Actions: CommonActions<Areas> = {
  [FETCH_AREAS]: (state) => ({
    ...state,
    status: 'FETCHING'
  }),
  [failure(FETCH_AREAS)]: (state, action) => ({
    ...state,
    status: 'ERROR',
    error: getActionError(action)
  }),
  [success(FETCH_AREAS)]: (state, action) => ({
    ...state,
    status: 'LOADED',
    error: false,
    data: getActionResponse(action)
  })
}

const areas =
  (state = initialState, action: ActionResponse<Areas>) => 
    Actions[action.type]?.(state, action) || state

export default areas
