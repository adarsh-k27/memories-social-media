import React from 'react'
import { NAV_BAR_NAME_COLOR } from '../styles'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rainbow.png'
import { LinkButton,ReactButton } from '.'
import {useSelector} from 'react-redux'
function NavBar () {
  const {auth} = useSelector(state=>state.AUTH)
  return (
    <div className='w-full h-auto py-[.5rem] md:py-[1rem] grid grid-cols-2 gap-3'>
      <div className='flex flex-row gap-4 items-center justify-start md:justify-start'>
        <p className='tracking-tighter flex gap-[.1rem] items-center'>
          {' '}
          <span className='text-4xl md:text-5xl font-[Island Moments] font-semibold text-red-400'>
            M
          </span>{' '}
          <span className={` ${NAV_BAR_NAME_COLOR} text-sky-500`}>emo</span>{' '}
          <span className={` ${NAV_BAR_NAME_COLOR} text-violet-800`}>ries</span>
        </p>
        <NavLink to={'/'} className='cursor-pointer'>
          <img
            src={logo}
            alt='logo image'
            className='w-8 h-6 md:w-10 md:h-8 object-cover'
          />
        </NavLink>
      </div>
      <div className=' w-24 mr-3 md:w-36 md:mr-6  ml-auto'>
        {
          !auth ? <LinkButton to={'signin'} /> : <ReactButton text="SignOut"  /> 
        }
      </div>
    </div>
  )
}

export default NavBar
