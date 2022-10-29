import {Routes,Route} from 'react-router-dom'
import { AddPost, HomePage } from '../pages'
import React from 'react'

function Router_wrapper() {
  return (
    <Routes>
        <Route path='*' element={<HomePage />} ></Route>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/add-post' element={<AddPost/>} ></Route>
    </Routes>
  )
}

export default Router_wrapper;