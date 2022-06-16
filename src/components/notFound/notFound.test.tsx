import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import NotFound from './notFound'

const history = createMemoryHistory()
const mockStore = configureMockStore()

describe('Render NotFound with Logo', () => {
  it('should render Not Found component correctly', () => {
    const store = mockStore({})

    render(
      <Provider store={store}>
        <Router navigator={history} location='/'>
          <NotFound />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Sorry. There are not found/i)).toBeInTheDocument()
  })
})
