import {
  fakeSortedHealthScore,
  fakeSortedPopularity,
  fakeSortedPrice,
  fakeSortedTimeCooking,
  fakeSortRecipes
} from '../mocks/recipesSortMock'
import {
  getSortRecipesByPopularity,
  getSortRecipesByPrice,
  getSortRecipesByTimeCooking,
  getSortRecipesByHealthScore
} from './sort'

describe('Function: getSortRecipesByPopularity', () => {
  it('shoud return array sorted by Likes', () => {
    expect(getSortRecipesByPopularity(fakeSortRecipes)).toEqual(fakeSortedPopularity)
  })
})

describe('Function: getSortRecipesByPrice', () => {
  it('shoud return array sorted by Price', () => {
    expect(getSortRecipesByPrice(fakeSortRecipes)).toEqual(fakeSortedPrice)
  })
})

describe('Function: getSortRecipesByTimeCooking', () => {
  it('shoud return array sorted by Time Cooking', () => {
    expect(getSortRecipesByTimeCooking(fakeSortRecipes)).toEqual(fakeSortedTimeCooking)
  })
})

describe('Function: getSortRecipesByHealthScore', () => {
  it('shoud return array sorted by Health Score', () => {
    expect(getSortRecipesByHealthScore(fakeSortRecipes)).toEqual(fakeSortedHealthScore)
  })
})
