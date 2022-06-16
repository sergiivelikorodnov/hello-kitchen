import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { AppRoute } from '../../config/routes'
import Homepage from './homepage'
import { fakeStateRecipes } from '../../mocks/mockStore'
import { createAPI } from '../../service/api'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../store'
import { Action } from '@reduxjs/toolkit'

const history = createMemoryHistory()

const api = createAPI()
const middlewares = [thunk.withExtraArgument(api)]

const mockStore = configureMockStore<RootState, Action, ThunkDispatch<RootState, typeof api, Action>>(middlewares)

describe('Home Page render', () => {
  it('should render filter and 12 cards', () => {
    const store = mockStore(fakeStateRecipes)

    render(
      <Provider store={store}>
        <Router navigator={history} location={AppRoute.Root}>
          <Homepage />
        </Router>
      </Provider>
    )

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()

    expect(screen.getAllByTestId('recipeCard')).toHaveLength(12)
  })
})
