import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UnauthView from './views/UnauthView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'

function App() {
  const [count, setCount] = useState(0)

  return (

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<UnauthView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
