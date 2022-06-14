import { SimilarRecipesType, SingleRecipeType } from './recipe'

export type RecipesStateType = {
  recipes: SingleRecipeType[]
  loading: boolean
}

export type SingleRecipeStateType = {
  recipe: SingleRecipeType
  similarRecipes: SimilarRecipesType
  loading: boolean
}
