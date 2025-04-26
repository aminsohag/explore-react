import React from 'react'
import './Bottle.css'

export default function Bottle({bottle}) {
    const {name, price, img} = bottle
  return (
    <div className='bottle'>
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <img src={img} alt="" />
    </div>
  )
}
