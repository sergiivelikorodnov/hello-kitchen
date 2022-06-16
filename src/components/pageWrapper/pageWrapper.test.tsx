import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import PageWrapper from './pageWrapper'

const history = createMemoryHistory()
const mockStore = configureMockStore()

describe('Render Wrapper with Logo', () => {
  it('should render Wrapper component correctly', () => {
    const store = mockStore({})

    render(
      <Provider store={store}>
        <Router navigator={history} location='/'>
          <PageWrapper />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Hello Kitchen/i)).toBeInTheDocument()
  })
})
