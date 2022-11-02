import {Routes,Route} from 'react-router-dom'
import { AddPost, HomePage, SignIn } from '../pages'
import React from 'react'
import {useSelector} from 'react-redux'
function Router_wrapper() {
  const {auth}=useSelector(state=>state.AUTH)
  return (
    <Routes>
        <Route path='*' element={<HomePage />} ></Route>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/add-post' element={auth ? <AddPost/> : <SignIn />} ></Route>
        <Route path='/signin' element={<SignIn />} ></Route>
    </Routes>
  )
}

export default Router_wrapper;