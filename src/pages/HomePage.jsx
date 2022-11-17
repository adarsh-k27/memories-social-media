import React, { useEffect } from 'react'
import HomeWrapper from '../components/HomeWrapper'
import { ReactCard, SideBar } from '../components'
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
      <div className='w-full h-screen md:h-auto grid grid-rows-[85%,15%] md:grid-cols-[75%,25%] mx-2'>
        <div className='flex flex-wrap items-center justify-start gap-6'>
          {posts.length > 0 &&
            posts.map((post, index) => <ReactCard key={index} data={post} />)}
        </div>
        <SideBar />
      </div>
    </HomeWrapper>
  )
}

export default HomePage
