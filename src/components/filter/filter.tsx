import React, { useEffect, useState } from 'react'
import { cuisineList, dishesList, SortingType, sortList } from '../../consts/const'
import Dropdowns from '../dropdowns/dropdowns'
import { SingleRecipeType } from '../../types/recipe'
import { useDebouncedCallback } from 'use-debounce'
import {
  getSortRecipesByHealthScore,
  getSortRecipesByPopularity,
  getSortRecipesByPrice,
  getSortRecipesByTimeCooking
} from '../../utils/sort'
import styles from './filter.module.scss'

type FiterProps = {
  setRecipes: (arg: SingleRecipeType[]) => void
  recipes: SingleRecipeType[]
}

function Filter({ setRecipes, recipes }: FiterProps) {
  const [searchTitle, setSearchTitle] = useState('')
  const [cuisine, setCuisine] = useState('Select Cuisine')
  const [dish, setDish] = useState('Select Type')
  const [sort, setSort] = useState('Sort')

  const getSortedrecipes = (sortType: string, recipes: SingleRecipeType[]): SingleRecipeType[] => {
    switch (sortType) {
      case SortingType.POPULAR:
        return getSortRecipesByPopularity(recipes)
      case SortingType.PRICE:
        return getSortRecipesByPrice(recipes)
      case SortingType.HEALTH:
        return getSortRecipesByHealthScore(recipes)
      case SortingType.TIME_COOKING:
        return getSortRecipesByTimeCooking(recipes)
      default:
        return recipes
    }
  }

  const debounced = useDebouncedCallback(
    () => {
      const filter: SingleRecipeType[] = recipes
        .slice()
        .filter(recipe =>
          searchTitle && searchTitle !== '' ? recipe && recipe.title.toLowerCase().includes(searchTitle) : recipe
        )
        .filter(recipe =>
          dish !== 'Select Type' ? recipe && recipe.dishTypes.includes(dish.toLocaleLowerCase()) : recipe
        )
        .filter(recipe =>
          cuisine !== 'Select Cuisine' ? recipe && recipe.cuisines.includes(cuisine.toLocaleLowerCase()) : recipe
        )

      getSortedrecipes(sort, filter)
      setRecipes(filter)
    },
    100,
    { maxWait: 2000 }
  )

  useEffect(
    () => () => {
      debounced.flush()
    },
    [debounced]
  )

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTitle(e.target.value.toLowerCase())
    debounced()
  }

  const handleCuisine = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCuisine(e.target.value)
    debounced()
  }

  const handleDish = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDish(e.target.value)
    debounced()
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
    debounced()
  }

  return (
    <div className={styles.sContainer}>
      <div className={styles.sFilter}>
        <input className={styles.sInput} value={searchTitle} placeholder='Search' onChange={handleClick} />
        <Dropdowns options={cuisineList} handleChange={handleCuisine} value={cuisine} />
        <Dropdowns options={dishesList} handleChange={handleDish} value={dish} />
      </div>
      <div className={styles.sSort}>
        <Dropdowns options={sortList} handleChange={handleSort} value={sort} />
      </div>
    </div>
  )
}

export default Filter
