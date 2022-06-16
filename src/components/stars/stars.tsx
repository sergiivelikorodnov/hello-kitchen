import React from 'react'
import StarFilled from '@ant-design/icons/lib/icons/StarFilled'
import StarOutlined from '@ant-design/icons/lib/icons/StarOutlined'

type StarsProps = {
  rating: number
}

function Stars({ rating }: StarsProps): JSX.Element {
  const positive = Array(rating).fill(rating)
  const negative = Array(5 - rating).fill(rating)

  return (
    <div>
      {positive && positive.map((star, index) => <StarFilled data-testid='starFilled' key={index} />)}
      {negative && negative.map((star, index) => <StarOutlined data-testid='starOutlined' key={index} />)}
    </div>
  )
}

export default Stars
