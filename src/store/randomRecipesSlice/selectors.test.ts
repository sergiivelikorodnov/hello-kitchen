import { fakeStateRecipes } from '../../mocks/mockStore'
import {getAllRecipes, getLoadingStatus} from './selectors'

describe('Redux selectors', () => {

    it('should select recipes from state object', () => {
        const result = getAllRecipes(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.RANDOM_RECIPES.recipes)
      })

      it('should select loading from state object', () => {
        const result = getLoadingStatus(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.RANDOM_RECIPES.loading)
      })

  })