import { SimilarRecipesType, SingleRecipeType } from '../types/recipe'
import { recipesMocks } from './recipesMock'
import { similarRecipesMock } from './similarRecipesMock'

export type fakeStateType = {
  RANDOM_RECIPES: {
    recipes: SingleRecipeType[]
    loading: boolean
  }
  RECIPE_INFO: {
    recipe: SingleRecipeType | null
    similarRecipes: SimilarRecipesType
    loading: boolean
  }
}

export const fakeStateRecipes: fakeStateType = {
  RANDOM_RECIPES: {
    recipes: recipesMocks.recipes,
    loading: false
  },
  RECIPE_INFO: {
    recipe: recipesMocks.recipes[0],
    similarRecipes: similarRecipesMock,
    loading: false
  }
}

export const fakeStateLoading: fakeStateType = {
  RANDOM_RECIPES: {
    recipes: recipesMocks.recipes,
    loading: true
  },
  RECIPE_INFO: {
    recipe: recipesMocks.recipes[0],
    similarRecipes: similarRecipesMock,
    loading: false
  }
}
