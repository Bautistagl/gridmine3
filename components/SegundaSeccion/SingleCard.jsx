import Image from 'next/image'
import React from 'react'

const SingleCard = ({image,title,subtitle}) => {
  return (
    <div className='single-card'>
        <Image alt='' src={image} height={50} width={50}/>
        <div> {title}</div>
        <span>{subtitle}</span>


    </div>
  )
}

export default SingleCard