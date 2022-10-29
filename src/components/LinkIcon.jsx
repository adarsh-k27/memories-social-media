import React from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import {Link} from 'react-router-dom'
function LinkIcon ({ title,icon,to }) {
  return (
    <Link to={"add-post"} className='w-10 h-auto py-[.1rem]  shadow-md shadow-black/20'>
      <Tooltip title={title}>
        <IconButton>{icon}</IconButton>
      </Tooltip>
    </Link>
  )
}

export default LinkIcon
