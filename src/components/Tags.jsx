import React from 'react'
import { AiOutlineCloseCircle } from '../icons'
function Tags ({ text,setState }) {
  return (
    <div className='w-auto h-3 py-[.8rem] rounded-md bg-gray-500 text-white font-bold flex items-center gap-3 justify-evenly'>
      <p className='text-sm font-semibold'>{text}</p>
      <AiOutlineCloseCircle className='text-sm text-red-300' onClick={(e)=>{
        e.preventDefault()
        setState((state)=>state.filter((tag)=> tag !== text))
      }} />
    </div>
  )
}

export default Tags
