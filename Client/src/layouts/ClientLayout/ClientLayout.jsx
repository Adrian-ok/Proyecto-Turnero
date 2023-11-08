import React from 'react'
import { Navbar } from '../../components'

export function ClientLayout(props) {

  const { children } = props

  return (
    <div>
      <Navbar />

      {children}
    </div>
  )
}
