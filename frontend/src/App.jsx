import { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import HistoryPage from './pages/HistoryPage'

function App() {

  return (
    <div className='bg-gradient-to-b from-[#E8FFD7] to-white'>
      <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </div>
  )
}

export default App
