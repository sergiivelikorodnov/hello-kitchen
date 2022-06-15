import React, { useEffect, useState } from 'react'
import Search from '../../components/filter/filter'
import RecipeItem from '../../components/recipeItem/recipeItem'
import RecipeList from '../../components/recipeList/recipeList'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { recipesMocks } from '../../mocks/recipesMock'
import { fetchRecipesAction } from '../../store/apiActions'
import { getAllRecipes, getLoadingStatus } from '../../store/randomRecipesSlice/selectors'
import { RecipesType, SingleRecipeType } from '../../types/recipe'
import styles from './homepage.module.scss'
import { nanoid } from 'nanoid'
import Loader from '../../components/loader/loader'
import NotFound from '../../components/notFound/notFound'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import axios from 'axios'
import { APIRoutes } from '../../config/apiRoutes'
import { API_BASE_URL, AUTH_TOKEN_KEY } from '../../const'
import { clearRecipesArray, setRecipes } from '../../store/randomRecipesSlice/randomRecipesSlice'

function Homepage(): JSX.Element {
  const dispatch = useAppDispatch()
  // const fetchedRecepies = recipesMocks.recipes.slice(0, 4)
  // const loading = false
  //const [data, setData] = useState<RecipesType>([])
  const getFetchedRecipes = useAppSelector(getAllRecipes)
  const [fetchedRecipes, setFetchedRecipes] = useState<SingleRecipeType[]>(getFetchedRecipes)
  const loading = useAppSelector(getLoadingStatus)
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData)

  dispatch(clearRecipesArray)

  useEffect(() => {
    dispatch(fetchRecipesAction())
  }, [dispatch])

  useEffect(() => {
    setFetchedRecipes(getFetchedRecipes)
  }, [getFetchedRecipes])

  useEffect(() => {
    if (isFetching) {
      moreData()
    }
  }, [isFetching])

  function moreData() {
    axios.get<RecipesType>(`${API_BASE_URL}${APIRoutes.Recipes}?number=4&apiKey=${AUTH_TOKEN_KEY}`).then(({ data }) => {
      dispatch(setRecipes(data))
      setFetchedRecipes([...getFetchedRecipes, ...data.recipes])
      setIsFetching(false)
    })
  }

  return (
    <>
      <div>
        <Search setRecipes={setFetchedRecipes} recipes={getFetchedRecipes} setIsFetching={setIsFetching} />
        {loading ? (
          <Loader />
        ) : getFetchedRecipes.length === 0 ? (
          <NotFound />
        ) : (
          <div className={styles.rGrid}>
            {getFetchedRecipes.map(recipe => (
              <RecipeItem key={nanoid()} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Homepage
