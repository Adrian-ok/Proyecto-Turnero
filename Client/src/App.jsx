import { useState } from 'react'
import { Navigation } from './routes'
import { AuthProvider } from './context/AuthContext.jsx'
import { ShopsProvider } from './context/ShopsContext.jsx'

function App() {

  return (
    <AuthProvider>
      <ShopsProvider>
        <Navigation />
      </ShopsProvider>
    </AuthProvider>
  )
}

export default App
