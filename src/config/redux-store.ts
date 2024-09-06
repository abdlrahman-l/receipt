import axios from 'axios'
import { Dispatch } from 'react'
import { Action, applyMiddleware, compose, createStore } from 'redux'
import { multiClientMiddleware } from 'redux-axios-middleware'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:any;
  }
}

type MiddlewareProps = {
  action: Action,
  next: (action: Action) => void,
  error: Error,
  dispatch: Dispatch<Record<string,string>>
}

const onRequestError = (props: MiddlewareProps) => {
  const { action, next, error } = props

  const nextAction = {
    type: `${action.type}_FAIL`,
    error,
    meta: {
      previousAction: props
    }
  }

  next(nextAction)

  return nextAction
}

const createStoreWithMiddleware = applyMiddleware(
  thunk.withExtraArgument(null),
  multiClientMiddleware({
      default: {
        client: axios.create({
          baseURL: `https://themealdb.com/api/json/v1/1/`,
          responseType: 'json',
        })
      }
    },
    {
    returnRejectedPromiseOnError: true,
    onError: onRequestError,
    interceptors: {
      request: [
        (_, req) => req
      ]
    }
  })
)(createStore)

const store = createStoreWithMiddleware(
  rootReducer,
  compose(
    typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({
        name: 'Receipe project',
        trace: true
      })
      : (f) => f
  )
)

// @ts-ignore
store.__PERSISTOR = persistStore(store)

export default store
