import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@renderer/components/layout'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  )
}

export default App
