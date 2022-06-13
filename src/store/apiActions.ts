import { APIRoutes } from '../config/apiRoutes';
import { ThunkActionResult } from '../types/action';
import { toast } from 'react-toastify';


import { getRecipes, setLoading } from './randomRecipesSlice/randomRecipesSlice';
import { RecipesType } from '../types/recipe';
import { AUTH_TOKEN_KEY, NotificationMessage, toastPosition } from '../const';

export const fetchRecipesAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setLoading());
    await api
      .get<RecipesType>(`${APIRoutes.Recipes}?number=12&apiKey=${AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(getRecipes(data));
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition));
  };
