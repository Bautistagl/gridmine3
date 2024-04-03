import React from 'react'
import ContactBox from './ContactBox'

const ContactBanner = () => {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <h3> Jeronimo Aguirre </h3>
            <p>Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.</p>
            <div style={{display:'flex'}}>
                <ContactBox
                    circle='circle1'
                    title='Discovery Call'
                    text='Want to learn more about us? This short call with Jeronimo gives you time to let us know about your needs to see if our service is right for you.'

                />
                <ContactBox
                    circle='circle2'
                    title='Sales Call'
                    text='Ready to start mining Bitcoin? This call with Jeronimo gives you time to select your Bitcoin Miner, Electricity Plan, and more!'

                />


            </div>

        </div>

        <div className='contact-text'>
            <h1> Looking for hosting? Book a call with Jeronimo</h1>
            <span> We help our clients learn, explore, and mine Bitcoin.</span>

        </div>

    </div>
  )
}

export default ContactBanner