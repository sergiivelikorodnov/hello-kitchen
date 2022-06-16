import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Homepage from '../../pages/homepage/homepage'
import RecipeInfo from '../../pages/recipeInfo/recipeInfo'
import PageWrapper from '../pageWrapper/pageWrapper'
import NotFound from '../notFound/notFound'
import { AppRoute } from '../../config/routes'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<PageWrapper />}>
        <Route index element={<Homepage />} />
        <Route path={AppRoute.RecipeId} element={<RecipeInfo />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
