import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { AiFillLike, BsThreeDotsVertical } from '../icons'
import img from '../assets/rainbow.png'
import { Link } from 'react-router-dom'
function ReactCard ({ data }) {
  return (
    <Link to={'/'}>
      <div className='relative w-[320px] group'>
        <div className='absolute top-0 right-0 hidden  group-hover:block'>
          <BsThreeDotsVertical className='text-black/80 text-md ' />
        </div>
        <Card sx={{ maxWidth: 320 }} className='bg-red-500 z-100'>
          <div className='w-full '>
            <CardMedia
              component='img'
              height='140px'
              image={data?.image}
              alt='green iguana'
            />
          </div>
          <div className='bg-darkBgColor'>
            <CardContent>
              <p className='font-bold text-lg font-serief text-white/90'>
                {data.title}
              </p>

              <p className='font-medium  text-white/70 text-[.78rem] tracking-wider font-serief'>
                {data?.shortDesc.length >= 150
                  ? `${data.shortDesc.slice(0, 150)}`
                  : data.shortDesc}
                <span className='text-sky-500 text-md font-semibold'>
                  {data.shortDesc.length > 150 && '...More'}
                </span>
              </p>
            </CardContent>
            <CardActions>
              <div className='w-full h-auto flex justify-between'>
                <AiFillLike className='text-white/70 text-lg' />
              </div>
            </CardActions>
          </div>
        </Card>
      </div>
    </Link>
  )
}

export default ReactCard
