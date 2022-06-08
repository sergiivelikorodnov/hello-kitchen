import { combineReducers } from "redux";
import randomRecipesSlice from "./randomRecipesSlice/randomRecipesSlice";

export enum StoreNameSpace {
  RandomRecipes = "RANDOM_RECIPES",
}

export const rootReducer = combineReducers({
  [StoreNameSpace.RandomRecipes]: randomRecipesSlice,
});

