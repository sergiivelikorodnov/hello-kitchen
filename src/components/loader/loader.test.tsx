import React from 'react'
import { render } from '@testing-library/react'
import Loader from './loader'

describe('Render Loading Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader />)
    expect(container).toMatchSnapshot()
  })
})
