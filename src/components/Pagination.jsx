import React from 'react'
import { BiSkipNext, BiSkipPrevious } from '../icons'
import IconBox from './IconBox'
import { useSelector } from 'react-redux'
import { NextPage, PreviosPage } from '../reducers/post'
import { useDispatch } from 'react-redux'
function Pagination () {
  const { page } = useSelector(state => state.POSTS)
  const dispatch = useDispatch()
  return (
    <div className='w-full h-auto flex flex-row py-1 gap-3 items-center justify-center shadow-sm shadow-black/20 border-solid border-t-2 border-t-white/20 border-white/20 bg-white/20'>
      {page !== 1 && (
        <IconBox
          title={'previous'}
          icon={<BiSkipPrevious />}
          onClickFn={dispatch(PreviosPage())}
        />
      )}
      <p>{page}</p>
      <IconBox
        title={'Next'}
        icon={<BiSkipNext />}
        onClickFn={dispatch(NextPage())}
      />
    </div>
  )
}

export default Pagination
