import { fakeStateRecipes } from '../../mocks/mockStore'
import {getSingleRecipeInfo, getSimilarRecipes, getSimilarRecipesLoadingStatus} from './selectors'

describe('Redux selectors', () => {

    it('should select recipe info from state object', () => {
        const result = getSingleRecipeInfo(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.RECIPE_INFO.recipe)
      })

      it('should select similar recipes from state object', () => {
        const result = getSimilarRecipes(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.RECIPE_INFO.similarRecipes)
      })

      it('should select loading status from state object', () => {
        const result = getSimilarRecipesLoadingStatus(fakeStateRecipes)
        expect(result).toEqual(fakeStateRecipes.RECIPE_INFO.loading)
      })

  })