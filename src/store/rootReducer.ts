import { combineReducers } from 'redux'
import complexSearchSlice from './complexSearchSlice/complexSearchSlice'
import singleRecipeSlice from './singleRecipeSlice/singleRecipeSlice'

export enum StoreNameSpace {
  ComplexSearch = 'COMPLEX_SEARCH_RECIPES',
  RecipeInfo = 'RECIPE_INFO'
}

export const rootReducer = combineReducers({
  [StoreNameSpace.RecipeInfo]: singleRecipeSlice,
  [StoreNameSpace.ComplexSearch]: complexSearchSlice
})
