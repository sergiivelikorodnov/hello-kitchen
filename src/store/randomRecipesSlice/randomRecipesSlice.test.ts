import { recipesMocks } from '../../mocks/recipesMock'
import randomRecipesReducer, { setRecipes, setLoading, clearRecipesArray } from './randomRecipesSlice'

describe('randomRecipesSlice', () => {
  const initialState = { recipes: [], loading: true }
  it('should return Initial state when passed empty action', () => {
    const result = randomRecipesReducer(undefined, { type: '' })

    expect(result).toEqual(initialState)
  })

  it('should load recipes with "setRecipes" action', () => {
    const action = {type: setRecipes.type, payload: recipesMocks}
    const result = randomRecipesReducer(initialState, action)

    expect(result.loading).toBe(false)
    expect(result.recipes).toEqual(recipesMocks.recipes)
  })

  it('should set loading status with "setLoading" action', () => {
    const action = {type: setLoading.type}
    const result = randomRecipesReducer({ recipes: [], loading: false }, action)

    expect(result.loading).toBe(true)
  })

  it('should clear recipes array with "clearRecipesArray" action', () => {
    const action = {type: clearRecipesArray.type}
    const result = randomRecipesReducer({ recipes: recipesMocks.recipes, loading: false }, action)

    expect(result.recipes).toEqual([])
  })
})
