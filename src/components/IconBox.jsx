import React from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import {} from '../reducers/post'
function IconBox ({ title,icon,onClickFn }) {
  return (
    <div className='w-10 h-auto py-[.1rem]  shadow-md shadow-black/20'
    onClick={(e)=>{
      e.preventDefault()

    }}
    >
      <Tooltip title={title}>
        <IconButton>
          {icon}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default IconBox
