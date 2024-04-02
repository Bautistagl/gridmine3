import React from 'react'
import SingleSupp from './SingleSupp'

const Support = () => {
  return (
    <div className='support-container'>
        <div className='single-container'>
            <SingleSupp
            title='Email'
            subtitle='gridMine@support.com'
            button='Send an email'
            image='/live-chat.png'

            />
            <SingleSupp
             title='Live Chat'
             subtitle='Ask a question right now'
             button='Start a chat'
             image='/live-chat.png'
            />
            <SingleSupp
             title='Whatsapp'
             subtitle='Talk to our experts'
             button='+54113094394'
             image='/live-chat.png'
            />
        </div>
        <div className='support-form'>
            <div className='inputs-container'>

                <div className='inputs-support'>
                    <label>Your name</label>
                    <input placeholder='Enter your name'/>
                </div>
                <div className='inputs-support'>
                    <label>Email Address</label>
                    <input placeholder='Enter your email'/>
                </div>

            
            </div>
            <textarea placeholder='Brief about the requirements'/>
            <button> Send </button>

        </div>

    </div>
  )
}

export default Support