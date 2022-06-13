import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Homepage from '../../pages/homepage/homepage'
import NotFound from '../../pages/notFound/notFound'
import Recipe from '../../pages/recipe/recipe'
import PageWrapper from '../pageWrapper/pageWrapper'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<Homepage />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
