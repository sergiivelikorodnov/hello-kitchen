import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { AppRoute } from '../../config/routes'
import { dishesList } from '../../const'
import Filter from './filter'
import { recipesMocks } from '../../mocks/recipesMock'

const history = createMemoryHistory()
const mockStore = configureMockStore()

describe('Render Filters', () => {
  it('should render Input and 3 selects', () => {
    const store = mockStore({})
    const onFakeHandleChange = jest.fn()

    render(
      <Provider store={store}>
        <Router navigator={history} location={AppRoute.Root}>
          <Filter setRecipes={onFakeHandleChange} setIsFetching={onFakeHandleChange} recipes={recipesMocks.recipes} />
        </Router>
      </Provider>
    )

    const selectTest = screen.queryAllByTestId('selectTest')
    expect(selectTest).toHaveLength(3)

    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
  })
})
