import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

function Header(): JSX.Element {
  return (
    <h1 className={styles.hLogo}>
      <Link to='/'>Hello Kitchen</Link>
    </h1>
  )
}

export default memo(Header)
