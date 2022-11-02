import React from 'react'
import { InputBox, ReactButton } from '../components'

function SearchBox ({}) {
  return (
    <div className='w-full h-full mt-2 flex flex-col gap-3 shadow-md shadow-black/20 '>
      <InputBox text={'Search With Tag'} />
      <InputBox text={'Seracg With Post'} />
      <ReactButton text={'Search'} />
    </div>
  )
}

export default SearchBox
