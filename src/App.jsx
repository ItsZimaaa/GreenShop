import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Category from './Pages/Category'

export default function App() {
  return (
    <BrowserRouter>
      <div className='font-Cera'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
