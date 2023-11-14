import React from 'react'
import { Navbar } from '../../components'
import { useAuth } from '../../context/AuthContext'
import { LoginPage } from '../../pages/Client'
import { Navigate } from 'react-router-dom'

export function AdminLayout(props) {

  const { children } = props
  const { isAuthenticated } = useAuth()


  if (!isAuthenticated) {
    return <LoginPage />
  }
  else {
    return (
      <div>
        <Navbar />

        {children}
      </div>
    )
  }
}
