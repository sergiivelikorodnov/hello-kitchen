import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import Stars from './stars'
import { AppRoute } from '../../config/routes'

const history = createMemoryHistory()
const mockStore = configureMockStore()

describe('Render Stars', () => {
  it('should render filled and outlined stars depend on rating', () => {
    const store = mockStore({})

    render(
      <Provider store={store}>
        <Router navigator={history} location={AppRoute.Root}>
          <Stars rating={4} />
        </Router>
      </Provider>
    )

    const filledStars = screen.queryAllByTestId('starFilled')
    expect(filledStars).toHaveLength(4)

    const outlinedStars = screen.queryAllByTestId('starOutlined')
    expect(outlinedStars).toHaveLength(1)
  })
})
