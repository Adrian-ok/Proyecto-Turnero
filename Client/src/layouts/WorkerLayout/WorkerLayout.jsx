import React from 'react'

export function WorkerLayout(props) {

  const { children } = props

  return (
    <div>
      <p>Worker Layout</p>

      {children}
    </div>
  )
}