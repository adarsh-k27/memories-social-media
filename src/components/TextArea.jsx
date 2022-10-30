import React from 'react'

function TextArea ({ text, col, row }) {
  return (
    <div className='w-[90%] h-auto mx-3 my-2 group flex flex-col gap-2 shadow-md shadow-black/30'>
      <label htmlFor='' className='font-serif text-sm text-black/60'>
        {text}
      </label>
      <textarea
        type='text'
        name=''
        id=''
        cols={col}
        rows={row}
        className='resize-none w-full text-sm h-full border-2 group-hover:focus:border-2 group-hover:focus:border-black/10 focus:border-black/50
'
      />
    </div>
  )
}

export default TextArea
