import { useState } from 'react'
import { Navigation } from './routes'
import { AuthProvider } from './context/AuthContext.jsx'

function App() {

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

export default App
