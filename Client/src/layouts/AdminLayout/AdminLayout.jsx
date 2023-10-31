import React from 'react'

export function AdminLayout(props) {

  const {children} = props

  return (
    <div>
      <p>Admin layout</p>

      {children}
    </div>
  )
}
