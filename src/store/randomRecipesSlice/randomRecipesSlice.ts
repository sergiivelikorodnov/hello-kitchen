import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecipesType } from '../../types/recipe'
import { RecipesStateType } from '../../types/state'

const initialState: RecipesStateType = {
  recipes: [],
  loading: true
}

const randomRecipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearRecipesArray(state) {
      state.recipes = []
    },
    setRecipes(state, action: PayloadAction<RecipesType>) {
      state.recipes = state.recipes.concat(action.payload.recipes)
      state.loading = false
    },
    setLoading(state) {
      state.loading = true
    }
  }
})

export const { setRecipes, setLoading, clearRecipesArray } = randomRecipesSlice.actions

export default randomRecipesSlice.reducer
