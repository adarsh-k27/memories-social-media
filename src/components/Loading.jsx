import React from 'react'

function Loading () {
  return (
    <div className='flex w-full h-full items-center justify-center flex-col gap-1'>
      <svg
        className='animate-spin h-5 w-5 bg-sky-600  '
        viewBox='0 0 24 24'
      ></svg>
      <p>10</p>
    </div>
  )
}

export default Loading
