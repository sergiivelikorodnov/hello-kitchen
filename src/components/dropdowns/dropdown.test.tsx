import React from 'react'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureMockStore } from '@jedmao/redux-mock-store'
import { AppRoute } from '../../config/routes'
import Dropdowns from './dropdowns'
import { dishesList } from '../../consts/const'

const history = createMemoryHistory()
const mockStore = configureMockStore()

describe('Render Dropdowns', () => {
  it('should render dropdowns', () => {
    const store = mockStore({})
    const onFakeHandleChange = jest.fn()

    render(
      <Provider store={store}>
        <Router navigator={history} location={AppRoute.Root}>
          <Dropdowns handleChange={onFakeHandleChange} value={'Test'} options={dishesList} />
        </Router>
      </Provider>
    )

    const dropdownsTest = screen.queryAllByTestId('dropdownTest')
    expect(dropdownsTest).toHaveLength(dishesList.length)

    expect(screen.getByText(dishesList[0].name)).toBeInTheDocument()
  })
})
