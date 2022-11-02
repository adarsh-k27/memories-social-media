import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {  AiFillLike, BsThreeDotsVertical } from '../icons'
import { Link } from 'react-router-dom'
function ReactCard ({data}) {
  return (
    <Link to={'/'}>
      <div className='relative w-[270px] group'>
        <div className='absolute top-0 right-0 hidden  group-hover:block'>
          <BsThreeDotsVertical className='text-black/80 text-md ' />
        </div>
        <Card sx={{ maxWidth: 270 }} className='bg-red-500 z-100'>
          <CardMedia
            component='img'
            height='140'
            image={data.image}
            alt='green iguana'
          />
          <div className='bg-darkBgColor'>
            <CardContent>
              <p className='font-bold text-lg font-serief text-white/90'>
                {data.Title}
              </p>

              <p className='font-medium  text-white/70 text-sm tracking-wider font-serief'>
                {data.shortDesc}
              </p>
            </CardContent>
            <CardActions>
                <div className='w-full h-auto flex justify-between'>
                    <AiFillLike className='text-white/70 text-lg'/>
                </div>
            </CardActions>
          </div>
        </Card>
      </div>
    </Link>
  )
}

export default ReactCard
