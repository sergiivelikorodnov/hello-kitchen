import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { AppRoute } from '../../config/routes'
import RecipeItem from './recipeItem'
import { recipesMocks } from '../../mocks/recipesMock'

const history = createMemoryHistory()
const mockStore = configureMockStore()

describe('Render Recipe card', () => {
  const store = mockStore({})

  const fakeApp = (
    <Provider store={store}>
      <Router navigator={history} location={AppRoute.Root}>
        <RecipeItem recipe={recipesMocks.recipes[0]} />
      </Router>
    </Provider>
  )

  it('should render Clock Icon correctly', () => {
    render(fakeApp)
    expect(screen.getByTestId('clockIcon')).toBeInTheDocument()
  })

  it('should render Minutes correctly', () => {
    render(fakeApp)
    expect(screen.getByText('45min')).toBeInTheDocument()
  })

  it('should render The first title correctly', () => {
    render(fakeApp)
    expect(screen.getByText(/The first recipe/i)).toBeInTheDocument()
  })
})
