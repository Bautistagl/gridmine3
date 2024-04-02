import React from 'react'
import SingleSupp from './SingleSupp'

const Support = () => {
  return (
    <div>
        <div>
            <SingleSupp
            title='Email'
            subtitle='gridMine@support.com'
            button='Send an email'
            image='/emailSupp.png'

            />
            <SingleSupp/>
            <SingleSupp/>
        </div>
        <div className='support-form'>
            <div>

                <div>
                    <label>Your name</label>
                    <input placeholder='Enter your name'/>
                </div>
                <div>
                    <label>Emaild Address</label>
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