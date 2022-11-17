import React from 'react'
import { InputBox, ReactButton } from '../components'

function SearchBox ({}) {
  return (
    <div className='w-full h-auto  flex flex-col gap-1 '>
      <InputBox text={'Search With Tag'} />
      <InputBox text={'Seracg With Post'} />
      <ReactButton text={'Search'} />
    </div>
  )
}

export default SearchBox
