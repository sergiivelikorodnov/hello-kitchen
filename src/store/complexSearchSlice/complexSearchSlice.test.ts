import { loadmoreRecipesMock, searchRecipesMock } from '../../mocks/searchRecipesMock'
import complexSearchReducer, {
  setSearchRecipes,
  setSearchLoading,
  setLoadMoreSearchRecipes
} from './complexSearchSlice'

describe('complexSearchReducer', () => {
  const initialState = { results: [], loading: true, offset: 0, number: 0, totalResults: 0 }
  it('should return Initial state when passed empty action', () => {
    const result = complexSearchReducer(undefined, { type: '' })

    expect(result).toEqual(initialState)
  })

  it('should loadMore recipes with "setLoadMoreSearchRecipes" action', () => {
    const action = { type: setLoadMoreSearchRecipes.type, payload: loadmoreRecipesMock }
    const result = complexSearchReducer({ results: searchRecipesMock.results, loading: false, offset: 4, number: 4, totalResults: 5220 }, action)

    expect(result.loading).toBe(false)
    expect(result.results.length).toBe(6)
    expect(result.offset).toBe(6)
    expect(result.number).toBe(6)
    expect(result.totalResults).toBe(5220)
  })

  it('should load recipes with "setSearchRecipes" action', () => {
    const action = { type: setSearchRecipes.type, payload: searchRecipesMock }
    const result = complexSearchReducer(initialState, action)

    expect(result.loading).toBe(false)
    expect(result.results).toEqual(searchRecipesMock.results)
  })

  it('should set loading status with "setSearchLoading" action', () => {
    const action = { type: setSearchLoading.type }
    const result = complexSearchReducer({ results: [], loading: false, offset: 0, number: 0, totalResults: 0 }, action)

    expect(result.loading).toBe(true)
  })

})
