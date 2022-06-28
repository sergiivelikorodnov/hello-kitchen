import { RootState } from '..'
import { SearchRecipeCardType } from '../../types/recipe'
import { StoreNameSpace } from '../rootReducer'

export const getSearchRecipes = (state: RootState): SearchRecipeCardType[] => state[StoreNameSpace.ComplexSearch].results
export const getSearchLoadingStatus = (state: RootState): boolean => state[StoreNameSpace.ComplexSearch].loading
export const getSearchOffset = (state: RootState): number => state[StoreNameSpace.ComplexSearch].offset
export const getSearchLoadedRecipes = (state: RootState): number => state[StoreNameSpace.ComplexSearch].number
export const getSearchTotalSearch = (state: RootState): number => state[StoreNameSpace.ComplexSearch].totalResults
