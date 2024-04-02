import React from 'react'
import SingleCard from './SingleCard'
import Image from 'next/image'

const CardsLanding = () => {
  return (
    <div className='cards-landing'>
        <p>WHY PICK GRID MINE?</p>
        <h1> It's easy, we make Bitcoing mining effortless</h1>
        <div style={{display:'flex'}}>
        <SingleCard
        image='/calculator.png'
        title='Precision Billing'
        subtitle='Only billed for your uptime. 
          Avg 98.2%+ Uptime.'
        />
          <SingleCard
        image='/check2.png'
        title='Precision Billing'
        subtitle='Only billed for your uptime. 
          Avg 98.2%+ Uptime.'
        />
          <SingleCard
        image='/secure.png'
        title='Precision Billing'
        subtitle='Only billed for your uptime. 
          Avg 98.2%+ Uptime.'
        />
          <SingleCard
        image='/customer.png'
        title='Precision Billing'
        subtitle='Only billed for your uptime. 
          Avg 98.2%+ Uptime.'
        />
        </div>

    </div>
  )
}

export default CardsLanding