import { SearchRecipeCardType, SimilarRecipesType, SingleRecipeType } from './recipe'

export type RecipesStateType = {
  recipes: SingleRecipeType[]
  loading: boolean
}

export type SearchRecipesStateType = {
  results: SearchRecipeCardType[]
  offset: number
  totalResults: number
  number: number
  loading: boolean
}

export type SingleRecipeStateType = {
  recipe: SingleRecipeType
  similarRecipes: SimilarRecipesType
  loading: boolean
}
