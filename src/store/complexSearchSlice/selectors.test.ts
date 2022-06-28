import { fakeStateRecipes } from '../../mocks/mockStore'
import {getSearchRecipes, getSearchLoadingStatus, getSearchOffset, getSearchLoadedRecipes as getNumberLoadedRecipes, getSearchTotalSearch} from './selectors'

describe('Redux selectors', () => {

    it('should select recipes from state object', () => {
        const result = getSearchRecipes(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.COMPLEX_SEARCH_RECIPES.results)
      })

      it('should select loading from state object', () => {
        const result = getSearchLoadingStatus(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.COMPLEX_SEARCH_RECIPES.loading)
      })

      it('should select offset from state object', () => {
        const result = getSearchOffset(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.COMPLEX_SEARCH_RECIPES.offset)
      })

      it('should select number of loaded recipes from state object', () => {
        const result = getNumberLoadedRecipes(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.COMPLEX_SEARCH_RECIPES.number)
      })

      it('should select total results from state object', () => {
        const result = getSearchTotalSearch(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.COMPLEX_SEARCH_RECIPES.totalResults)
      })

  })