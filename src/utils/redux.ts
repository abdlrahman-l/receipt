import { Action } from 'redux'
import storage from 'redux-persist/lib/storage'

export type CommonState<T> = {
  data: T | null,
  error: Object,
  status: 'PRISTINE' | 'FETCHING' | 'LOADED' | 'ERROR' | 'REFRESHING'
}

export type ActionResponse<T> = Action & {
  readonly payload: {
    readonly data: T | null,
    readonly error: Record<string,string>
  }
}

export type CommonActions<T> = Record<string,(s: CommonState<T>, a: ActionResponse<T>) => CommonState<T>>

export const success = (actionType: string) => `${actionType}_SUCCESS`
export const failure = (actionType: string) => `${actionType}_FAIL`

export const createSuccessAction = (type: string, payload) => ({
  type: success(type),
  payload
})

export const createFailureAction = (type: string, error) => ({
  type: failure(type),
  error
})

export const status = {
  PRISTINE: 'PRISTINE',
  FETCHING: 'FETCHING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
  REFRESHING: 'REFRESHING'
}

export const getActionResponse = <T>(action: ActionResponse<T>) => {
  return action.payload.data
}

export const getActionError = (action) => {
  return action.error
}

export const getPersistConfig = (key, whitelist) => {
  const config = {
    key,
    storage
  }
  if (whitelist?.length > 0) {
    return {
      ...config,
      whitelist
    }
  }
  return config
}

export const getActionRequestParams = (action) => {
  return action.payload.request.params
}

export const getActionRequestData = (action) => {
  return action.payload.request.data
}

export const getPreviousActionRequestParams = (action) => {
  return action.meta.previousAction.payload.request.params
}

export const getPreviousActionRequestData = (action) => {
  return action.meta.previousAction.payload.request.data
}

