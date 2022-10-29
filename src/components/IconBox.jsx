import React from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

function IconBox ({ title,icon }) {
  return (
    <div className='w-10 h-auto py-[.1rem]  shadow-md shadow-black/20'>
      <Tooltip title={title}>
        <IconButton>
          {icon}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default IconBox
