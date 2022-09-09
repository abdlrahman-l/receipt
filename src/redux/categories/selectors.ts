import { GlobalState } from '../../config/root-reducer'
import { status } from '../../utils/redux'

export const selectCategories = (state: GlobalState) => state.categories.data?.categories

export const selectCategoriesLoading = (state: GlobalState) => state.categories.status === status.FETCHING
export const selectCategoriesLoaded = (state: GlobalState) => state.categories.status === status.LOADED
export const selectCategoriesError= (state: GlobalState) => state.categories.status === status.ERROR
