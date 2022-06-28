import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchRecipesType } from '../../types/recipe'
import { SearchRecipesStateType } from '../../types/state'

const initialState: SearchRecipesStateType = {
  results: [],
  loading: true,
  offset: 0,
  number: 0,
  totalResults:0
}

const complexSearchSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setLoadMoreSearchRecipes(state, action: PayloadAction<SearchRecipesType>) {
      state.number = state.number + action.payload.number
      state.offset = state.offset + action.payload.number
      state.totalResults = action.payload.totalResults
      state.results = [ ...state.results, ...action.payload.results]
      state.loading = false
    },
    setSearchRecipes(state, action: PayloadAction<SearchRecipesType>) {
      state.number = action.payload.number
      state.offset = action.payload.number
      state.totalResults = action.payload.totalResults
      state.results = action.payload.results
      state.loading = false
    },
    setSearchLoading(state) {
      state.loading = true
    }
  }
})

export const { setSearchRecipes, setSearchLoading, setLoadMoreSearchRecipes } = complexSearchSlice.actions

export default complexSearchSlice.reducer
