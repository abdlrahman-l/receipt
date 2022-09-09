import { Dispatch } from 'react'
import { Action } from 'redux'

import { GlobalState } from '../../config/root-reducer'
import { FETCH_AREAS } from './constants'
import { selectAreasLoading } from './selectors'

const fetch = {
  type: FETCH_AREAS,
  payload: {
    request: {
      method: 'get',
      url: `list.php?a=list`,
    }
  }
}

export const fetchAreas =
    (dispatch: Dispatch<Action>, getState: () => GlobalState) => {
      const state = getState()
      const isLoading = selectAreasLoading(state)

      if (isLoading) return

      dispatch(fetch)
    }
