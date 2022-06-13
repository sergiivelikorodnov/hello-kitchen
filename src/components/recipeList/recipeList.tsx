import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchRecipesAction } from '../../store/apiActions'
import { getAllRecipes, getLoadingStatus } from '../../store/randomRecipesSlice/selectors'
import RecipeItem from '../recipeItem/recipeItem'
import React from 'react'
import styles from './recipeList.module.scss'
import { RecipesType, SingleRecipeType } from '../../types/recipe'

function RecipeList(): JSX.Element {
  const dispatch = useAppDispatch()
  const recepies = useAppSelector(getAllRecipes)
  const loading = useAppSelector(getLoadingStatus)

  useEffect(() => {
    dispatch(fetchRecipesAction())
  }, [dispatch])

  return (
    <div className={styles.rGrid}>
      {loading ? (
        'Please wait'
      ) : (
        <>{recepies && recepies.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}</>
      )}
    </div>
  )
}

export default RecipeList
