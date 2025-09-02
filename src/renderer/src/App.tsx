import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@renderer/components/layout'
import AuthPage from '@renderer/components/auth'
import ProtectedRoute from '@renderer/components/protectedRoute'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/chat" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      } />
      <Route path="/" element={<AuthPage />} />
    </Routes>
  )
}

export default App
