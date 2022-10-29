import React from 'react'
import { BiSkipNext, BiSkipPrevious } from '../icons'
import IconBox from './IconBox'

function Pagination () {
  return (
    <div className='w-full h-auto flex flex-row py-1 gap-3 items-center justify-center shadow-sm shadow-black/20 border-solid border-t-2 border-t-white/20 border-white/20 bg-white/20'>
      <IconBox title={'previous'} icon={<BiSkipPrevious />} />
      <p>3</p>
      <IconBox title={'Next'} icon={<BiSkipNext />} />
    </div>
  )
}

export default Pagination
