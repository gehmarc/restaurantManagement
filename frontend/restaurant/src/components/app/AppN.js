import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../main/HomePage'
import NavN from '../nav/NavN'
import Footer from '../Footer'
import Login from '../auth/Login'
import Register from '../auth/Register'
import MainMenu from '../main/menu/MainMenu'
import Reservation from '../main/reservation/Reservation'
import About from '../main/about/About'
import Order from '../main/order/Order'
import Contact from '../main/Contact/Contact'

const AppN = () => {
  return (
    <div id="top">
        
        <NavN />
        <Routes>
            <Route path='/menu/main-menu' element={<MainMenu />}></Route>
            <Route path='/book-reservation' element={<Reservation />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/order' element={<Order />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/contact-us' element={<Contact />}></Route>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default AppN
