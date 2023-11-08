import React from 'react'
import { Navbar } from '../../components'

export function AdminLayout(props) {

  const { children } = props

  return (
    <div>
      <Navbar />

      {children}
    </div>
  )
}
