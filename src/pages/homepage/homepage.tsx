import React, { useEffect, useState } from 'react'
import Filter from '../../components/filter/filter'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchComplexSearchAction } from '../../store/apiActions'
import { SearchRecipeCardType, SearchRecipesType } from '../../types/recipe'
import Loader from '../../components/loader/loader'
import NotFound from '../../components/notFound/notFound'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import axios from 'axios'
import { APIRoutes } from '../../config/apiRoutes'
import { API_BASE_URL, NUMBER_LOADMORE_RECIPES } from '../../consts/const'
import styles from './homepage.module.scss'
import {
  getSearchLoadedRecipes,
  getSearchLoadingStatus,
  getSearchOffset,
  getSearchRecipes,
  getSearchTotalSearch
} from '../../store/complexSearchSlice/selectors'
import RecipeItemSearch from '../../components/RecipeItemSearch/recipeItemSearch'
import { setLoadMoreSearchRecipes } from '../../store/complexSearchSlice/complexSearchSlice'

function Homepage(): JSX.Element {
  const dispatch = useAppDispatch()
  const getFetchedRecipes = useAppSelector(getSearchRecipes)
  const offset = useAppSelector(getSearchOffset)
  const loading = useAppSelector(getSearchLoadingStatus)
  const loadedRecipesNumber = useAppSelector(getSearchLoadedRecipes)
  const totalSearchRecipes = useAppSelector(getSearchTotalSearch)
  const [fetchedRecipes, setFetchedRecipes] = useState<SearchRecipeCardType[]>([])
  const [query, setQuery] = useState<string>('titleMatch=')

  const [isFetching, setIsFetching] = useInfiniteScroll(moreData)

  let ignore = false

  useEffect(() => {
    if (!ignore) dispatch(fetchComplexSearchAction(query))
    return () => {
      ignore = true
    }
  }, [dispatch, query])

  useEffect(() => {
    setFetchedRecipes(getFetchedRecipes)
  }, [getFetchedRecipes])

  useEffect(() => {
    return () => {
      if (isFetching && loadedRecipesNumber <= totalSearchRecipes) {
        moreData()
      }
    }
  }, [])

  function moreData() {
    axios
      .get<SearchRecipesType>(
        `${API_BASE_URL}${APIRoutes.ComplexSearch}${query}&offset=${offset}&number=${NUMBER_LOADMORE_RECIPES}&apiKey=${process.env.REACT_APP_AUTH_TOKEN_KEY}`
      )
      .then(({ data }) => {
        dispatch(setLoadMoreSearchRecipes(data))
        setIsFetching(false)
        setFetchedRecipes(fetchedRecipes && [...fetchedRecipes, ...data.results])
      })
  }

  return (
    <div>
      <Filter setQuery={setQuery} />
      {loading ? (
        <Loader />
      ) : fetchedRecipes && fetchedRecipes.length === 0 ? (
        <NotFound />
      ) : (
        <div className={styles.rGrid}>
          {fetchedRecipes &&
            fetchedRecipes.map(recipe => recipe && <RecipeItemSearch key={recipe.id} recipe={recipe} />)}
        </div>
      )}
    </div>
  )
}

export default Homepage
