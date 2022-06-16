import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import App from './App'
import { AppRoute } from '../../config/routes'
import { createAPI } from '../../service/api'
import { Router } from 'react-router-dom'
import { RootState } from '../../store'
import { fakeStateLoading, fakeStateRecipes } from '../../mocks/mockStore'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

const history = createMemoryHistory()

const api = createAPI()
const middlewares = [thunk.withExtraArgument(api)]

const mockStore = configureMockStore<RootState, Action, ThunkDispatch<RootState, typeof api, Action>>(middlewares)

describe('Render Home page', () => {
  const store = mockStore(fakeStateRecipes)

  const fakeApp = (
    <Provider store={store}>
      <Router navigator={history} location={AppRoute.Root}>
        <App />
      </Router>
    </Provider>
  )

  it('should render "24 cards" correctly', () => {
    render(fakeApp)
    expect(screen.getAllByTestId('recipeCard')).toHaveLength(24)
  })

  it('should render Logo', () => {
    render(fakeApp)
    expect(screen.getByText(/Hello Kitchen/i)).toBeInTheDocument()
  })
})

describe('Home page Loading', () => {
  const store = mockStore(fakeStateLoading)

  const fakeApp = (
    <Provider store={store}>
      <Router navigator={history} location={AppRoute.Root}>
        <App />
      </Router>
    </Provider>
  )

  it('should render Loading', () => {
    render(fakeApp)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})

describe('Check routing', () => {
  const store = mockStore(fakeStateRecipes)

  const fakeApp = (
    <Provider store={store}>
      <Router navigator={history} location={history.location}>
        <App />
      </Router>
    </Provider>
  )

  history.push('/recipe/6502139')
  render(fakeApp)
  expect(screen.getByText(/The first recipe/i)).toBeInTheDocument()
})
