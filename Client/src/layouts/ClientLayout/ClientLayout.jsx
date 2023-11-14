import React from 'react'
import { Navbar } from '../../components'
import { useAuth } from '../../context/AuthContext'
import { LoginPage } from '../../pages/Client'

export function ClientLayout(props) {

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
