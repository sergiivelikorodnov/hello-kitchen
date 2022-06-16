import { SimilarRecipeType } from '../../types/recipe'
import React from 'react'
import { Link } from 'react-router-dom'
import { API_IMAGE_URL, ImageSize } from '../../const'
import RecipeTimeСomplexity from '../recipeTimeСomplexity/recipeTimeСomplexity'
import styles from './similarRecipe.module.scss'

type RecipeItemProps = {
  recipe: SimilarRecipeType
}

function SimilarRecipe({ recipe }: RecipeItemProps): JSX.Element {
  if (recipe) {
    const { title, imageType, id, readyInMinutes, servings } = recipe
    return (
      <article className={styles.sItem}>
        <Link to={`/recipe/${id}`}>
          <img src={`${API_IMAGE_URL}${id}-${ImageSize.XL}.${imageType}`} alt={title} className={styles.sItem} />
        </Link>
        <div className={styles.sContent}>
          <div className={styles.sTitle}>
            <Link to={`/recipe/${id}`}>{title}</Link>
          </div>
          <hr />
          <RecipeTimeСomplexity readyInMinutes={readyInMinutes} />
        </div>
      </article>
    )
  } else {
    return <></>
  }
}

export default SimilarRecipe
