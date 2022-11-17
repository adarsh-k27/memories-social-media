import React from 'react'
import {useSelector} from 'react-redux'
import img from '../assets/rainbow.png'
import {LinkIcon} from '../components'
import {AiOutlinePlus} from '../icons'
import Avatar from '@mui/material/Avatar'

function BottomBar() {
    const { auth } = useSelector(state => state.AUTH)

  return (
    <div className='w-full flex  md:hidden flex-row gap-3 items-center justify-between absolute bottom-6 '>
       <LinkIcon title={'Add Post'} icon={<AiOutlinePlus />} to={'add-post'} />
{
  auth && (
    <div className='w-15 h-15 p-1 flex items-center  justify-center rounded-full shadow-md shadow-black/30'>
      {<Avatar alt='Remy Sharp' src={img} />}
    </div>
  )
}

    </div>
  )
}

export default BottomBar;

//In Bottom Bar We Want Only 3 Items 
//add Post Icon and User Profile Button ,Pagination