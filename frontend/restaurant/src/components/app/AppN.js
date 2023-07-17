import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../main/HomePage'
import NavN from '../nav/NavN'
import Footer from '../Footer'
import Login from '../auth/Login'
import Register from '../auth/Register'

const AppN = () => {
  return (
    <div id="top">
        
        <NavN />
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default AppN
