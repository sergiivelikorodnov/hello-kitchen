import React from 'react'
import { SingleRecipeSearchType } from '../../types/recipe'
import { Link } from 'react-router-dom'
import styles from './recipeItemSearch.module.scss'

type RecipeItemProps = {
  recipe: SingleRecipeSearchType
}

function RecipeItemSearch({ recipe }: RecipeItemProps): JSX.Element {
  if (recipe) {
    const { title, image, id } = recipe
    return (
      <article className={styles.rItem} data-testid='recipeCard'>
        <div>
          <Link to={`/recipe/${id}`}>
            <img src={image} alt={title} className={styles.rItem} />
          </Link>
        </div>
        <div className={styles.rContent}>
          <div className={styles.rTitle}>
            <Link to={`/recipe/${id}`}>{title}</Link>
          </div>
        </div>
      </article>
    )
  } else {
    return <></>
  }
}

export default RecipeItemSearch
