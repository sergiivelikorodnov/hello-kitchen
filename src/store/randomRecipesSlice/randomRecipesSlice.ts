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
    setRecipes(state, action: PayloadAction<RecipesType>) {
      state.recipes = action.payload.recipes
      state.loading = false
    },
    setLoading(state) {
      state.loading = true
    }

  }
})

export const { setRecipes, setLoading } = randomRecipesSlice.actions

export default randomRecipesSlice.reducer
