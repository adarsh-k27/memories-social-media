import React, { useEffect } from 'react'
import HomeWrapper from '../components/HomeWrapper'
import { BottomBar, ReactCard, SearchBox, SideBar } from '../components'
import { useSelector } from 'react-redux'
import { FetchPosts } from '../api/user'
function HomePage () {
  const { page, posts } = useSelector(state => state.POSTS)
  //console.log("hhh",page);
  useEffect(() => {
    FetchPosts(page)
  }, [page])
  return (
    <HomeWrapper>
      <div className='w-full h-screen grid grid-rows-[85%,15%] md:grid-cols-[75%,25%] mx-2'>
        <div className='flex flex-col gap-3'>
          <div className='block md:hidden'>
            <SearchBox />
          </div>
          <div className='flex flex-wrap items-center justify-start gap-6 overflow-y-scroll'>
            {posts.length > 0 &&
              posts.map((post, index) => <ReactCard key={index} data={post} />)}
          </div>
        </div>
        <div>
          <div className='hidden md:block'>
           <SideBar />
        </div>
        <div className='block md:hidden'>
          <BottomBar />
        </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default HomePage
