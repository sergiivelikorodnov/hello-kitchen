import { SearchRecipeCardType, SimilarRecipesType, SingleRecipeType } from '../types/recipe'
import { recipesMocks } from './recipesMock'
import { searchRecipesMock } from './searchRecipesMock'
import { similarRecipesMock } from './similarRecipesMock'

export type fakeStateType = {
  COMPLEX_SEARCH_RECIPES: {
    results: SearchRecipeCardType[]
    loading: boolean
    offset: number
    number: number
    totalResults: number
  }
  RECIPE_INFO: {
    recipe: SingleRecipeType | null
    similarRecipes: SimilarRecipesType
    loading: boolean
  }
}

export const fakeStateRecipes: fakeStateType = {
  COMPLEX_SEARCH_RECIPES: {
    results: searchRecipesMock.results,
    loading: false,
    offset: 4,
    number: 4,
    totalResults: 5220,
  },
  RECIPE_INFO: {
    recipe: recipesMocks.recipes[0],
    similarRecipes: similarRecipesMock,
    loading: false
  }
}

export const fakeStateLoading: fakeStateType = {
  COMPLEX_SEARCH_RECIPES: {
    results: searchRecipesMock.results,
    loading: true,
    offset: 4,
    number: 4,
    totalResults: 5220,
  },
  RECIPE_INFO: {
    recipe: recipesMocks.recipes[0],
    similarRecipes: similarRecipesMock,
    loading: false
  }
}
