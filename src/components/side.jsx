import React from 'react'
import { LinkIcon, Pagination, SearchBox, InputBox } from '../components'
import { AiOutlinePlus } from '../icons'
function sideBar () {
  return (
    <div className='w-screen md:w-full h-screen gap-3 px-[1rem] -ml-1 flex flex-col rounded-lg items-center bg-white/70 justify-center md:justify-start shadow-lg shadow-black/60 md:shadow-black/30'>
      <div className='hidden md:flex'>
        <SearchBox />
      </div>
      <div className='hidden md:flex'>
        <Pagination />
      </div>
      <LinkIcon title={'Add Post'} icon={<AiOutlinePlus />} to={'add-post'} />
    </div>
  )
}

export default sideBar
