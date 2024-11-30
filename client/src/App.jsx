import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UnauthView from './views/UnauthView'

function App() {
  const [count, setCount] = useState(0)

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnauthView />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
