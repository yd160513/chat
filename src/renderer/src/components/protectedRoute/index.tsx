import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '@renderer/store/mainSlice'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authenticated = useSelector(isAuthenticated)

  if (!authenticated) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
