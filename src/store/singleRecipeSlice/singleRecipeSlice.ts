import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecipesType, SimilarRecipesType, SingleRecipeType } from '../../types/recipe'
import { SingleRecipeStateType } from '../../types/state'

const initialState: SingleRecipeStateType = {
  recipe: null,
  similarRecipes: [],
  loading: true
}

const singleRecipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipeInfo(state, action: PayloadAction<SingleRecipeType>) {
      state.recipe = action.payload
    },
    setSimilarRecipes(state, action: PayloadAction<SimilarRecipesType>) {
      state.similarRecipes = action.payload
      state.loading = false
    },
    setSingleRecipeLoading(state) {
      state.loading = true
    }

  }
})

export const { setRecipeInfo, setSimilarRecipes, setSingleRecipeLoading } = singleRecipeSlice.actions

export default singleRecipeSlice.reducer