import React, { useEffect, useState } from 'react'
import Search from '../../components/filter/filter'
import RecipeItem from '../../components/recipeItem/recipeItem'
import RecipeList from '../../components/recipeList/recipeList'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { recipesMocks } from '../../mocks/recipesMock'
import { fetchRecipesAction } from '../../store/apiActions'
import { getAllRecipes, getLoadingStatus } from '../../store/randomRecipesSlice/selectors'
import { SingleRecipeType } from '../../types/recipe'
import styles from './homepage.module.scss'
import { nanoid } from 'nanoid'
import Loader from '../../components/loader/loader'
import NotFound from '../../components/notFound/notFound'

function Homepage(): JSX.Element {
  const dispatch = useAppDispatch()
  // const fetchedRecepies = useAppSelector(getAllRecipes)
  const fetchedRecepies = recipesMocks.recipes.slice(0, 4)
  const [recipes, setRecipes] = useState<SingleRecipeType[]>(fetchedRecepies)
  // const loading = useAppSelector(getLoadingStatus)
  const loading = false

  /*   useEffect(() => {
    dispatch(fetchRecipesAction())
  }, [dispatch])

  useEffect(() => {
    setRecipes(fetchedRecepies)
  }, [fetchedRecepies]) */

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log('qq')
  }

  return (
    <>
      <div onScroll={handleScroll}>
        <Search setRecipes={setRecipes} recipes={fetchedRecepies} />
        {loading ? (
          <Loader />
        ) : recipes.length === 0 ? (
          <NotFound />
        ) : (
          <div className={styles.rGrid}>
            {recipes.map(recipe => (
              <RecipeItem key={nanoid()} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Homepage
