import { SingleRecipeType } from "../types/recipe";

export const getSortRecipesByPopularity = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>  (recipeA !==null ?recipeA.aggregateLikes: Infinity) - (recipeB !==null ? recipeB.aggregateLikes: -Infinity));
  };

export const getSortRecipesByPrice = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>  (recipeA !==null ?recipeA.pricePerServing: Infinity) - (recipeB !==null ? recipeB.pricePerServing: -Infinity));
  };

export const getSortRecipesByTimeCooking = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>  (recipeA !==null ?recipeA.readyInMinutes: Infinity) - (recipeB !==null ? recipeB.readyInMinutes: -Infinity));
  };

export const getSortRecipesByHealthScore = (recipes:SingleRecipeType[]) => {
    return recipes.sort((recipeA, recipeB) =>  (recipeA !==null ?recipeA.healthScore: Infinity) - (recipeB !==null ? recipeB.healthScore: -Infinity));
  };
