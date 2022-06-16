import { RootState } from '..'
import { SingleRecipeType } from '../../types/recipe'
import { StoreNameSpace } from '../rootReducer'

export const getAllRecipes = (state: RootState): SingleRecipeType[] => state[StoreNameSpace.RandomRecipes].recipes

export const getLoadingStatus = (state: RootState): boolean => state[StoreNameSpace.RandomRecipes].loading
