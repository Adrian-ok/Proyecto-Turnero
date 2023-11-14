import React from 'react'
import { Navbar } from '../../components'

export function WorkerLayout(props) {

  const { children } = props

  return (
    <div>
      <Navbar />


      {children}
    </div>
  )
}