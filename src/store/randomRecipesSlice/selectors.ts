import { StoreNameSpace } from '../rootReducer';
import { SingleRecipeType } from 'types/recipe';
import { RootState } from 'store';

export const getAllRecipes = (state: RootState): SingleRecipeType[] =>
  state[StoreNameSpace.RandomRecipes].recipes;
