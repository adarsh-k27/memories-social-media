import React from 'react'
import { LinkIcon, Pagination, SearchBox } from '../components'
import { AiOutlinePlus } from '../icons'
import { useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import img from '../assets/rainbow.png'
function SideBar () {
  const { auth } = useSelector(state => state.AUTH)
  return (
    <div className=' w-screen md:w-full md:h-[320px]  gap-3 px-[.5rem] -ml-1 flex flex-col rounded-lg items-center bg-white/70 justify-center md:justify-start shadow-lg shadow-black/60 md:shadow-black/30'>
      <div className=' md:flex'>
        <SearchBox />
      </div>
      <div className=' md:flex'>
        <Pagination />
      </div>
      <LinkIcon title={'Add Post'} icon={<AiOutlinePlus />} to={'add-post'} />
      {auth && (
        <div className='w-15 h-15 p-1 flex items-center  justify-center rounded-full shadow-md shadow-black/30'>
          {<Avatar alt='Remy Sharp' src={img} />}
        </div>
      )}
    </div>
  )
}

export default SideBar

//sidebar This SideBar Is Only Used For Medium Screen Devices

//For Small Device We Will Set Up New Bottom Bar
