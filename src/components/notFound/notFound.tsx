import { FrownOutlined } from '@ant-design/icons'
import React from 'react'
import styles from './notFound.module.scss'

function NotFound() {
  return (
    <div className={styles.rTitle}>
      <FrownOutlined /> Sorry. There are not found
    </div>
  )
}

export default NotFound
