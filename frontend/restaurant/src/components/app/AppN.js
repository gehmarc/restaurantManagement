import React from 'react'
import { Route, Router } from 'react-router-dom'

import HomePage from '../main/HomePage'
import NavN from '../nav/NavN'
import Footer from '../Footer'

const AppN = () => {
  return (
    <div id="top">
        
        <NavN />
        <HomePage />
        <Footer />
    </div>
  )
}

export default AppN
