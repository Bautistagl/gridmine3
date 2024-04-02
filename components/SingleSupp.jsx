import Image from 'next/image'
import React from 'react'

const SingleSupp = ({title,subtitle,button,image}) => {
  return (
    <div>
        <Image alt='' src={image} height={40} width={40}/>
        <div>
            <span>{title}</span>
            <p>{subtitle}</p>
        </div>
        <button> {button} </button>


    </div>
  )
}

export default SingleSupp