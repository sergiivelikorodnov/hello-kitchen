import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { TailSpin } from 'react-loader-spinner'

function Loader(): JSX.Element {
  const lStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px'
  }

  return (
    <>
      <div style={lStyle} data-testid='loading'>
        <TailSpin height='50' width='50' color='grey' ariaLabel='loading' />
      </div>
    </>
  )
}

export default Loader
