import {Routes,Route} from 'react-router-dom'
import { HomePage } from '../pages'
import React from 'react'

function Router_wrapper() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} ></Route>
    </Routes>
  )
}

export default Router_wrapper;