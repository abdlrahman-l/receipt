import { GlobalState } from '../../config/root-reducer'
import { status } from '../../utils/redux'

export const selectAreas = (state: GlobalState) => state.areas.data?.meals

export const selectAreasLoading = (state: GlobalState) => state.areas.status === status.FETCHING
export const selectAreasLoaded = (state: GlobalState) => state.areas.status === status.LOADED
export const selectAreasError= (state: GlobalState) => state.areas.status === status.ERROR
