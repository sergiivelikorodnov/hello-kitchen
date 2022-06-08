import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchPostsAction } from 'store/apiActions'
import { getAllRecipes } from 'store/randomRecipesSlice/selectors'
import { Route, Routes } from 'react-router-dom'
import PageWrapper from 'components/pageWrapper/pageWrapper'
import NotFound from 'pages/notFound/notFound'
import Homepage from 'pages/homepage/homepage'
import Recipe from 'pages/recipe/recipe'

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const recepies = useAppSelector(getAllRecipes)
  console.log(recepies)

  useEffect(() => {
    dispatch(fetchPostsAction())
  }, [dispatch])

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
