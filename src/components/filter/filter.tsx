import React, { useEffect, useState } from 'react'
import { cuisineList, dishesList, sortList } from '../../consts/const'
import Dropdowns from '../dropdowns/dropdowns'
import { useDebouncedCallback } from 'use-debounce'
import styles from './filter.module.scss'

type FiterProps = {
  setQuery: (arg0: string) => void
}

function Filter({ setQuery }: FiterProps) {
  const [searchTitle, setSearchTitle] = useState('')
  const [cuisine, setCuisine] = useState('Select Cuisine')
  const [dish, setDish] = useState('Select Type')
  const [sort, setSort] = useState('')

  const queryArray: string[] = []
  const debounced = useDebouncedCallback(
    () => {
      searchTitle !== ''
        ? queryArray.push(`titleMatch=${searchTitle}`)
        : queryArray.push('titleMatch=')
      dish !== 'Select Type' ? queryArray.push(`type=${dish}`) : ''
      cuisine !== 'Select Cuisine' ? queryArray.push(`cuisine=${cuisine}`) : ''
      sort !== 'Sort' ? queryArray.push(`sort=${sort}`) : ''
      const query = queryArray.join('&')

      setQuery(query)
    },
    500,
    { maxWait: 2000 },
  )

  useEffect(
    () => () => {
      debounced.flush()
    },
    [debounced],
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
        <input
          className={styles.sInput}
          value={searchTitle}
          placeholder='Search'
          onChange={handleClick}
        />
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
