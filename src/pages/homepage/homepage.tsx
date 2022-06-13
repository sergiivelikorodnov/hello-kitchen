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

function Homepage(): JSX.Element {
  const dispatch = useAppDispatch()
  const fetchedRecepies = useAppSelector(getAllRecipes)
  // const fetchedRecepies = recipesMocks.recipes
  const [recipes, setRecipes] = useState<SingleRecipeType[]>(fetchedRecepies)
  const loading = useAppSelector(getLoadingStatus)
  // const loading = false

  useEffect(() => {
    dispatch(fetchRecipesAction())
  }, [dispatch])

  useEffect(() => {
    setRecipes(fetchedRecepies)
  }, [fetchedRecepies])

  return (
    <>
      <Search setRecipes={setRecipes} recipes={fetchedRecepies} />
      <div className={styles.rGrid}>
        {loading ? (
          'Please wait'
        ) : recipes.length === 0 ? (
          'There are no recipes'
        ) : (
          <>
            {recipes.map(recipe => (
              <RecipeItem key={nanoid()} recipe={recipe} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Homepage
