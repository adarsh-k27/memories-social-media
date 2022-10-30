import React from 'react'
import { AiOutlineCloseCircle } from '../icons'
function Tags () {
  return (
    <div className='w-auto h-3 py-[.8rem] rounded-md bg-gray-500 text-white font-bold flex items-center gap-3 justify-evenly'>
      <p className='text-sm font-semibold'>Hello</p>
      <AiOutlineCloseCircle className='text-sm text-red-300' />
    </div>
  )
}

export default Tags
