import { Fragment } from 'react'
import parse from 'html-react-parser'
import { SingleRecipeType } from '../../types/recipe'
import React from 'react'
import styles from './recipeItem.module.scss'

type RecipeItemProps = {
  recipe: SingleRecipeType
}

function RecipeItem({ recipe }: RecipeItemProps): JSX.Element {
  const { title, image, summary } = recipe

  return (
    <article className={styles.rItem}>
      <img src={image} alt={title} className={styles.rItem} />
      <div className={styles.rContent}>
        <div className={styles.rTitle}>{title}</div>
        <Fragment>{parse(summary)}</Fragment>
      </div>
    </article>
  )
}

export default RecipeItem
