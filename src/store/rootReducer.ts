import { combineReducers } from "redux";
import randomRecipesSlice from "./randomRecipesSlice/randomRecipesSlice";
import singleRecipeSlice from "./singleRecipeSlice/singleRecipeSlice";

export enum StoreNameSpace {
  RandomRecipes = "RANDOM_RECIPES",
  RecipeInfo = "RECIPE_INFO",
}

export const rootReducer = combineReducers({
  [StoreNameSpace.RandomRecipes]: randomRecipesSlice,
  [StoreNameSpace.RecipeInfo]: singleRecipeSlice,
});

