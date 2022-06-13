import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../header/header'

function PageWrapper(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PageWrapper
