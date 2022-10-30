import React from 'react'

function InputBox ({ text,setState }) {
  return (
    <div className='w-[90%] h-auto mx-3 my-2 group flex flex-col gap-2 shadow-md shadow-black/30'>
      <label htmlFor='' className='font-serif text-sm text-black/60'>
        {text}
      </label>
      <input
        type='text'
        name=''
        id=''
        className='w-full h-full border-2 group-hover:focus:border-2 group-hover:focus:border-black/10 focus:border-black/50'
        onChange={(e)=>{
          e.preventDefault()
          setState(e.target.value)
        }}
      />
    </div>
  )
}

export default InputBox
