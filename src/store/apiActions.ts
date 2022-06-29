import { APIRoutes } from '../config/apiRoutes'
import { ThunkActionResult } from '../types/action'
import { toast } from 'react-toastify'
import { SearchRecipesType, SimilarRecipesType, SingleRecipeType } from '../types/recipe'
import { NotificationMessage, NUMBER_LOADMORE_RECIPES, NUMBER_RECIPES, toastPosition } from '../consts/const'
import { setRecipeInfo, setSimilarRecipes, setSingleRecipeLoading } from './singleRecipeSlice/singleRecipeSlice'
import { setSearchLoading, setSearchRecipes } from './complexSearchSlice/complexSearchSlice'

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
      .get<SimilarRecipesType>(`${id}${APIRoutes.SimilarRecipes}?number=${NUMBER_LOADMORE_RECIPES}&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setSimilarRecipes(data))
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition))
  }


export const fetchComplexSearchAction =
  (query: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setSearchLoading())
    await api
      .get<SearchRecipesType>(`${APIRoutes.ComplexSearch}${query}&number=${NUMBER_RECIPES}&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setSearchRecipes(data))
      })
      .catch(() => toast.error(NotificationMessage.Error, toastPosition))
  }
