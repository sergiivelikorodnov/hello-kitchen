import Header from 'components/header/header'
import { Outlet } from 'react-router-dom'

function PageWrapper(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PageWrapper
