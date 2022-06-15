import { Fragment } from 'react'
import parse from 'html-react-parser'
import { SingleRecipeType } from '../../types/recipe'
import React from 'react'
import styles from './recipeItem.module.scss'
import { Link } from 'react-router-dom'
import { truncateString } from '../../utils/utils'
import ClockCircleOutlined from '@ant-design/icons/lib/icons/ClockCircleOutlined'
import StarFilled from '@ant-design/icons/lib/icons/StarFilled'
import { StarOutlined } from '@ant-design/icons'
import RecipeTimeСomplexity from '../recipeTimeСomplexity/recipeTimeСomplexity'

type RecipeItemProps = {
  recipe: SingleRecipeType
}

function RecipeItem({ recipe }: RecipeItemProps): JSX.Element {
  if (recipe) {
    const { title, image, summary, id, readyInMinutes, servings } = recipe
    return (
      <article className={styles.rItem}>
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
          <RecipeTimeСomplexity readyInMinutes={readyInMinutes} servings={servings} />
        </div>
      </article>
    )
  } else {
    return <></>
  }
}

export default RecipeItem
