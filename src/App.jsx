import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Carees from './components/Carees'


const App = () => {
  return (
    <div className=' box-border'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Carees/>}/>
      </Routes>
     
    </div>
  )
}

export default App
