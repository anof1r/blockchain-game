import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeOne from '../pages/ThemeOne'

function MyRoutes() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ThemeOne />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MyRoutes