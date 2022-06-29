import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SimilarRecipe from '../../components/similarRecipe/similarRecipe'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchRecipeInfoAction, fetchSimilarRecipesAction } from '../../store/apiActions'
import {
  getSimilarRecipes,
  getSimilarRecipesLoadingStatus,
  getSingleRecipeInfo
} from '../../store/singleRecipeSlice/selectors'
import parse from 'html-react-parser'
import Loader from '../../components/loader/loader'
import styles from './recipeInfo.module.scss'

function RecipeInfo(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const fetchedRecipeInfo = useAppSelector(getSingleRecipeInfo)
  const fetchedSimilarRecipes = useAppSelector(getSimilarRecipes)
  const loading = useAppSelector(getSimilarRecipesLoadingStatus)

  useEffect(() => {
    return () => {
      id && dispatch(fetchRecipeInfoAction(id))
      id && dispatch(fetchSimilarRecipesAction(id))
    }
  }, [dispatch, id])

  return (
    <div className='rContainer'>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.rContainer}>
          <div className={styles.rContent}>
            <div className={styles.rPost}>
              <LeftOutlined onClick={() => navigate(-1)} className={styles.rBack} data-testid='recipeInfo' />
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
          <h2 data-testid='similarRecipes'>Similar Recipes</h2>
          <div className={styles.sContainer}>
            {fetchedSimilarRecipes.length > 0 &&
              fetchedSimilarRecipes.map(recipe => recipe && <SimilarRecipe key={recipe.id} recipe={recipe} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeInfo
