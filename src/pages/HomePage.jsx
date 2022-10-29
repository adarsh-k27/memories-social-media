import React from 'react'
import HomeWrapper from '../components/HomeWrapper'
import {SideBar} from '../components'
function HomePage () {
  return (
    <HomeWrapper>
      
      <div className='w-full h-screen md:h-auto grid grid-rows-[85%,15%] md:grid-cols-[75%,25%] mx-2'>
        <p>Home Page Components</p>
        <SideBar />
      </div>
    </HomeWrapper>
  )
}

export default HomePage
