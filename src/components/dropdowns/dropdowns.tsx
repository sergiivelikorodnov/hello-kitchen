import React from 'react'
import { DropdownList } from '../../types/dropdowns'
import styles from './dropdowns.module.scss'

type Dropdownsprops = {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: DropdownList
  value: string
}

function Dropdowns({ handleChange, value, options }: Dropdownsprops): JSX.Element {
  return (
    <label>
      <select className={styles.dSelect} value={value} onChange={event => handleChange(event)} data-testid='selectTest'>
        {options.map(option => (
          <option key={option.value} data-testid='dropdownTest'>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Dropdowns
