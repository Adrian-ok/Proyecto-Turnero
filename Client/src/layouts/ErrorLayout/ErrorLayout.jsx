import React from 'react'

export function ErrorLayout(props) {

  const { children } = props

  return (
    <div className='flex justify-center items-center h-screen'>
      {children}
    </div>
  )
}
