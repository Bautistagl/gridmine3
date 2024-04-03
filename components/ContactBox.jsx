import Image from 'next/image'
import React from 'react'

const ContactBox = ({circle,title,text}) => {
  return (
    <div className='contact-box'>
        <div className='title-contact-box'>
            <div className={circle}> </div>
            <h2> {title}</h2>
            <Image alt='' src='/arrow.png' height={25} width={25}/>
        </div>    
        <span>
            {text}
        </span>

    </div>
  )
}

export default ContactBox