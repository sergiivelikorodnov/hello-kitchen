import { recipesMocks } from '../../mocks/recipesMock'
import { similarRecipesMock } from '../../mocks/similarRecipesMock'
import singleRecipeReducer, { setRecipeInfo, setSimilarRecipes, setSingleRecipeLoading } from './singleRecipeSlice'

describe('randomRecipesSlice', () => {
  const initialState = {
    recipe: null,
    similarRecipes: [],
    loading: true
  }
  it('should return Initial state when passed empty action', () => {
    const result = singleRecipeReducer(undefined, { type: '' })

    expect(result).toEqual(initialState)
  })

  it('should load recipes with "setRecipes" action', () => {
    const action = { type: setRecipeInfo.type, payload: recipesMocks.recipes[0] }
    const result = singleRecipeReducer(initialState, action)

    expect(result.loading).toBe(true)
    expect(result.recipe).toEqual(recipesMocks.recipes[0])
  })

  it('should set loading status with "setLoading" action', () => {
    const action = { type: setSingleRecipeLoading.type }
    const result = singleRecipeReducer({ recipe: null, similarRecipes: [], loading: false }, action)

    expect(result.loading).toBe(true)
  })

  it('should clear recipes array with "clearRecipesArray" action', () => {
    const action = { type: setSimilarRecipes.type, payload: similarRecipesMock }
    const result = singleRecipeReducer(initialState, action)

    expect(result.similarRecipes).toEqual(similarRecipesMock)
  })
})
