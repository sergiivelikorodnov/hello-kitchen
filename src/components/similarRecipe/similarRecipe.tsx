import { SimilarRecipeType } from '../../types/recipe'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './similarRecipe.module.scss'
import { API_IMAGE_URL, ImageSize } from '../../const'
import ClockCircleOutlined from '@ant-design/icons/lib/icons/ClockCircleOutlined'
import StarOutlined from '@ant-design/icons/lib/icons/StarOutlined'
import StarFilled from '@ant-design/icons/lib/icons/StarFilled'

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
          <div className={styles.sDetails}>
            <div className={styles.sTime}>
              <ClockCircleOutlined /> {readyInMinutes}
            </div>
            <div className={styles.sServings}>
              {servings}
              <StarFilled />
              <StarOutlined />
            </div>
          </div>
        </div>
      </article>
    )
  } else {
    return <></>
  }
}

export default SimilarRecipe
