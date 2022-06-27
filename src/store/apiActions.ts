import { APIRoutes } from '../config/apiRoutes'
import { ThunkActionResult } from '../types/action'
import { toast } from 'react-toastify'

import { setRecipes, setLoading } from './randomRecipesSlice/randomRecipesSlice'
import { RecipesType, SimilarRecipesType, SingleRecipeType } from '../types/recipe'
import { NotificationMessage, toastPosition } from '../consts/const'
import { setRecipeInfo, setSimilarRecipes, setSingleRecipeLoading } from './singleRecipeSlice/singleRecipeSlice'

export const fetchRecipesAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setLoading())
    await api
      .get<RecipesType>(`${APIRoutes.Recipes}?number=8&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setRecipes(data))
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition))
  }

export const fetchRecipeInfoAction =
  (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setSingleRecipeLoading())
    await api
      .get<SingleRecipeType>(`${id}${APIRoutes.SingleRecipe}?apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setRecipeInfo(data))
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition))
  }

export const fetchSimilarRecipesAction =
  (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setSingleRecipeLoading())
    await api
      .get<SimilarRecipesType>(`${id}${APIRoutes.SimilarRecipes}?number=4&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setSimilarRecipes(data))
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition))
  }


export const fetchComplexSearchAction =
  (query: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setLoading())
    await api
      .get<RecipesType>(`${APIRoutes.ComplexSearch}${query}&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setRecipes(data))
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition))
  }
