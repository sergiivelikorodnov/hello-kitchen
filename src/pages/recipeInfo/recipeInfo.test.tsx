import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { fakeStateRecipes } from '../../mocks/mockStore'
import { createAPI } from '../../service/api'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../store'
import { Action } from '@reduxjs/toolkit'
import RecipeInfo from './recipeInfo'

const history = createMemoryHistory()

const api = createAPI()
const middlewares = [thunk.withExtraArgument(api)]

const mockStore = configureMockStore<RootState, Action, ThunkDispatch<RootState, typeof api, Action>>(middlewares)

describe('Recipe Info render', () => {
  const store = mockStore(fakeStateRecipes)
  const path = '/recipe/6502139'

  const fakeApp = (
    <Provider store={store}>
      <Router navigator={history} location={path}>
        <RecipeInfo />
      </Router>
    </Provider>
  )
  it('should render Card and Similar card', () => {
    render(fakeApp)
    expect(screen.getByText(/The first recipe/i)).toBeInTheDocument()
  })

  it('should render go to back button', () => {
    render(fakeApp)
    expect(screen.getByTestId('recipeInfo')).toBeInTheDocument()
  })

  it('should render Similar Recipes', () => {
    render(fakeApp)
    expect(screen.getByTestId('similarRecipes')).toBeInTheDocument()
  })

  it('should render 4 similar recipes cards', () => {
    render(fakeApp)
    expect(screen.getAllByTestId('clockIcon')).toHaveLength(4)
  })
})
