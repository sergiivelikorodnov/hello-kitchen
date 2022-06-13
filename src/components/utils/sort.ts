import { SingleRecipeType } from "../../types/recipe";

export const getSortRecipesByPopularity = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>recipeA.aggregateLikes - recipeB.aggregateLikes);
  };

export const getSortRecipesByPrice = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>recipeA.pricePerServing - recipeB.pricePerServing);
  };

export const getSortRecipesByTimeCooking = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>recipeA.readyInMinutes - recipeB.readyInMinutes);
  };

export const getSortRecipesByHealthScore = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>recipeA.healthScore - recipeB.healthScore);
  };
