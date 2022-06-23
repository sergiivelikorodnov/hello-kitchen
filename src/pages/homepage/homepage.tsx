import React, { useEffect, useState } from 'react'
import Filter from '../../components/filter/filter'
import RecipeItem from '../../components/recipeItem/recipeItem'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchRecipesAction } from '../../store/apiActions'
import { getAllRecipes, getLoadingStatus } from '../../store/randomRecipesSlice/selectors'
import { RecipesType, SingleRecipeType } from '../../types/recipe'
import Loader from '../../components/loader/loader'
import NotFound from '../../components/notFound/notFound'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import axios from 'axios'
import { APIRoutes } from '../../config/apiRoutes'
import { API_BASE_URL } from '../../consts/const'
import { clearRecipesArray, setRecipes } from '../../store/randomRecipesSlice/randomRecipesSlice'
import styles from './homepage.module.scss'
const _ = require('lodash')

function Homepage(): JSX.Element {
  const dispatch = useAppDispatch()
  const getFetchedRecipes = useAppSelector(getAllRecipes)
  const loading = useAppSelector(getLoadingStatus)
  const [fetchedRecipes, setFetchedRecipes] = useState<SingleRecipeType[]>([])

  const [isFetching, setIsFetching] = useInfiniteScroll(moreData)

  useEffect(() => {
    return () => {
      dispatch(clearRecipesArray())
      dispatch(fetchRecipesAction())
    }
  }, [dispatch])

  useEffect(() => {
    setFetchedRecipes(_.uniqBy(getFetchedRecipes, 'id'))
  }, [getFetchedRecipes])

  useEffect(() => {
    return () => {
      if (isFetching) {
        moreData()
      }
    }
  }, [isFetching])

  function moreData() {
    axios
      .get<RecipesType>(`${API_BASE_URL}${APIRoutes.Recipes}?number=4&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`)
      .then(({ data }) => {
        dispatch(setRecipes(data))

        setFetchedRecipes(fetchedRecipes && _.uniqBy([...fetchedRecipes, ...data.recipes], 'id'))
        setIsFetching(false)
      })
  }

  return (
    <div>
      <Filter setRecipes={setFetchedRecipes} recipes={getFetchedRecipes} setIsFetching={setIsFetching} />
      {loading ? (
        <Loader />
      ) : fetchedRecipes && fetchedRecipes.length === 0 ? (
        <NotFound />
      ) : (
        <div className={styles.rGrid}>
          {fetchedRecipes && fetchedRecipes.map(recipe => recipe && <RecipeItem key={recipe.id} recipe={recipe} />)}
        </div>
      )}
    </div>
  )
}

export default Homepage
