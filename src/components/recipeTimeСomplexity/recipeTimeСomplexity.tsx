import ClockCircleOutlined from '@ant-design/icons/lib/icons/ClockCircleOutlined'
import StarFilled from '@ant-design/icons/lib/icons/StarFilled'
import StarOutlined from '@ant-design/icons/lib/icons/StarOutlined'
import React from 'react'
import { getHoursMinsTime, getRandomRating } from '../../utils/utils'
import Stars from '../stars/stars'
import styles from './recipeTimeСomplexity.module.scss'

type recipeTimeServingProps = {
  readyInMinutes: number
  servings: number
}

function RecipeTimeСomplexity({ readyInMinutes, servings }: recipeTimeServingProps): JSX.Element {
  return (
    <div className={styles.sDetails}>
      <div className={styles.sTime}>
        <ClockCircleOutlined /> {getHoursMinsTime(readyInMinutes)}
      </div>
      <div className={styles.sServings}>
        <Stars rating={getRandomRating()} />
      </div>
    </div>
  )
}

export default RecipeTimeСomplexity
