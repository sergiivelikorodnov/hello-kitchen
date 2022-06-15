import React from 'react'
import StarFilled from '@ant-design/icons/lib/icons/StarFilled'
import StarOutlined from '@ant-design/icons/lib/icons/StarOutlined'
import { nanoid } from 'nanoid'

type StarsProps = {
  rating: number
}

function Stars({ rating }: StarsProps): JSX.Element {
  const positive = Array(rating).fill(rating)
  const negative = Array(5 - rating).fill(rating)

  return (
    <div>
      {positive && positive.map(star => <StarFilled key={nanoid()} />)}
      {negative && negative.map(star => <StarOutlined key={nanoid()} />)}
    </div>
  )
}

export default Stars
