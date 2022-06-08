
import { APIRoutes } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { toast } from 'react-toastify';

import { AUTH_TOKEN_KEY, NotificationMessage, toastPosition } from 'const';
import { RecipesType } from 'types/recipe';
import { getRecipes } from './randomRecipesSlice/randomRecipesSlice';

export const fetchPostsAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api
      .get<RecipesType>(`${APIRoutes.Recipes}?number=4&tags=vegetarian,dessert&apiKey=${AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(getRecipes(data));
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition));
  };

