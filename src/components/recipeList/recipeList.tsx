import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchRecipesAction } from '../../store/apiActions'
import { getAllRecipes, getLoadingStatus } from '../../store/randomRecipesSlice/selectors'
import RecipeItem from '../recipeItem/recipeItem'
import React from 'react'
import styles from './recipeList.module.scss'
import { RecipesType, SingleRecipeType } from '../../types/recipe'
import { nanoid } from 'nanoid'
import Loader from '../loader/loader'

function RecipeList(): JSX.Element {
  const dispatch = useAppDispatch()
  const recipes = useAppSelector(getAllRecipes)
  const loading = useAppSelector(getLoadingStatus)

  useEffect(() => {
    dispatch(fetchRecipesAction())
  }, [dispatch])

  return (
    <div className={styles.rGrid}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {recipes.map(recipe => (
            <RecipeItem key={nanoid()} recipe={recipe} />
          ))}
        </>
      )}
    </div>
  )
}

export default RecipeList
