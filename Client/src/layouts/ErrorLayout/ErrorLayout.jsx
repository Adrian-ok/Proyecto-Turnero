import React from 'react'

export function ErrorLayout(props) {

  const { children } = props

  return (
    <div>
      <p>ErrorLayout</p>
      {children}
    </div>
  )
}
