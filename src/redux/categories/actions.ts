import { Dispatch } from 'react'
import { Action } from 'redux'

import { GlobalState } from '../../config/root-reducer'
import { FETCH_CATEGORIES } from './constants'
import { selectCategoriesLoading } from './selectors'

const fetch = {
  type: FETCH_CATEGORIES,
  payload: {
    request: {
      method: 'get',
      url: 'categories.php',
    }
  }
}

export const fetchCategories =
    (dispatch: Dispatch<Action>, getState: () => GlobalState) => {
      const state = getState()
      const isLoading = selectCategoriesLoading(state)

      if (isLoading) return

      dispatch(fetch)
    }
