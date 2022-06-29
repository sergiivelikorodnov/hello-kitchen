import React from 'react'
import parse from 'html-react-parser'
import { SingleRecipeType } from '../../types/recipe'
import { Link } from 'react-router-dom'
import { truncateString } from '../../utils/utils'
import RecipeTimeСomplexity from '../recipeTimeСomplexity/recipeTimeСomplexity'
import styles from './recipeItem.module.scss'

type RecipeItemProps = {
  recipe: SingleRecipeType
}

function RecipeItem({ recipe }: RecipeItemProps): JSX.Element {
  if (recipe) {
    const { title, image, summary, id, readyInMinutes } = recipe
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
          <p>{parse(truncateString(summary, 250))}</p>
          <hr />
          <RecipeTimeСomplexity readyInMinutes={readyInMinutes} />
        </div>
      </article>
    )
  } else {
    return <></>
  }
}

export default RecipeItem
