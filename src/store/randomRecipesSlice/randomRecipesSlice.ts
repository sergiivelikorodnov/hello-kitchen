import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesType } from "types/recipe";
import { RecipesStateType } from "types/state";

const initialState: RecipesStateType = {
    recipes: []
};

const randomRecipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes(state, action: PayloadAction<RecipesType>) {
      state.recipes = action.payload.recipes;
    },
  },
});

export const { getRecipes } = randomRecipesSlice.actions;

export default randomRecipesSlice.reducer;