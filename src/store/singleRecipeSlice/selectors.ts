import { RootState } from '..'
import { SimilarRecipesType, SingleRecipeType } from '../../types/recipe'
import { StoreNameSpace } from '../rootReducer'

export const getSingleRecipeInfo = (state: RootState): SingleRecipeType => state[StoreNameSpace.RecipeInfo].recipe

export const getSimilarRecipes = (state: RootState): SimilarRecipesType =>
  state[StoreNameSpace.RecipeInfo].similarRecipes

export const getSimilarRecipesLoadingStatus = (state: RootState): boolean => state[StoreNameSpace.RecipeInfo].loading
