import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Dashboard />
      </main>
    </div>
  )
}

export default App