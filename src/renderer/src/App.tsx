import React from 'react'
import { useSelector } from 'react-redux'
import { selectValue } from '@renderer/store/mainSlice'

function App(): React.JSX.Element {

  const value = useSelector(selectValue)

  return (
    <>
      app - {value}
    </>
  )
}

export default App
