import ClockCircleOutlined from '@ant-design/icons/lib/icons/ClockCircleOutlined'
import React from 'react'
import { getHoursMinsTime, getRandomRating } from '../../utils/utils'
import Stars from '../stars/stars'
import styles from './recipeTime–°omplexity.module.scss'

type recipeTimeServingProps = {
  readyInMinutes: number
}

function RecipeTime–°omplexity({ readyInMinutes }: recipeTimeServingProps): JSX.Element {
  return (
    <div className={styles.sDetails}>
      <div className={styles.sTime}>
        <ClockCircleOutlined data-testid='clockIcon' /> {getHoursMinsTime(readyInMinutes)}
      </div>
      <div>
        <Stars rating={getRandomRating()} />
      </div>
    </div>
  )
}

export default RecipeTime–°omplexity
