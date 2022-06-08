import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchPostsAction } from 'store/apiActions'
import { getAllRecipes } from 'store/randomRecipesSlice/selectors'

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const recepies = useAppSelector(getAllRecipes)
  console.log(recepies)

  useEffect(() => {
    dispatch(fetchPostsAction())
  }, [dispatch])

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
