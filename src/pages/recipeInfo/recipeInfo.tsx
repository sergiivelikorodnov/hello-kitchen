import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import { nanoid } from 'nanoid'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SimilarRecipe from '../../components/similarRecipe/similarRecipe'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { recipesMocks } from '../../mocks/recipesMock'
import { fetchRecipeInfoAction, fetchSimilarRecipesAction } from '../../store/apiActions'
import {
  getSimilarRecipes,
  getSimilarRecipesLoadingStatus,
  getSingleRecipeInfo
} from '../../store/singleRecipeSlice/selectors'
import parse from 'html-react-parser'
import styles from './recipeInfo.module.scss'
import Loader from '../../components/loader/loader'

function RecipeInfo(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const fetchedRecipeInfo = useAppSelector(getSingleRecipeInfo)
  const fetchedRecipeInfo = recipesMocks.recipes[0]
  // const fetchedSimilarRecipes = useAppSelector(getSimilarRecipes)
  const fetchedSimilarRecipes = recipesMocks.recipes
  // const loading = useAppSelector(getSimilarRecipesLoadingStatus)
  const loading = false

  useEffect(() => {
    id && dispatch(fetchRecipeInfoAction(id))
    id && dispatch(fetchSimilarRecipesAction(id))
  }, [dispatch, id])

  return (
    <div className='rContainer'>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.rContainer}>
          <div className={styles.rContent}>
            <div className={styles.rPost}>
              <LeftOutlined onClick={() => navigate(-1)} className={styles.rBack} />
              <h1 className={styles.rTitle}>{fetchedRecipeInfo && fetchedRecipeInfo.title}</h1>
              <p className={styles.rDescription}>
                {fetchedRecipeInfo && fetchedRecipeInfo.summary !== null ? parse(fetchedRecipeInfo.summary) : ''}
              </p>
            </div>
            <img
              src={fetchedRecipeInfo && fetchedRecipeInfo.imageType !== null ? fetchedRecipeInfo.image : ''}
              alt={fetchedRecipeInfo && fetchedRecipeInfo.title !== null ? fetchedRecipeInfo.title : ''}
              className={styles.rImage}
            />
          </div>
          <h2>Similar Recipes</h2>
          <div className={styles.sContainer}>
            {fetchedSimilarRecipes.length > 0 &&
              fetchedSimilarRecipes.map(recipe => recipe && <SimilarRecipe key={nanoid()} recipe={recipe} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeInfo
