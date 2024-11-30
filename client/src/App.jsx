import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UnauthView from './views/UnauthView'
import LoginView from './views/LoginView'

function App() {
  const [count, setCount] = useState(0)

  return (

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<UnauthView />} />
        <Route path="/login" element={<LoginView />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
