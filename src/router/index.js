import {Routes,Route} from 'react-router-dom'
import { AddPost, HomePage, SignIn } from '../pages'
import React from 'react'

function Router_wrapper() {
  return (
    <Routes>
        <Route path='*' element={<HomePage />} ></Route>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/add-post' element={<AddPost/>} ></Route>
        <Route path='/signin' element={<SignIn />} ></Route>
    </Routes>
  )
}

export default Router_wrapper;