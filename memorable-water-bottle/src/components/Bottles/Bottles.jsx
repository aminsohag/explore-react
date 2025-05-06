import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { addToLS } from '../../utilities/localstorage'

export default function Bottles() {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handlePur = (bottle) => {
      // console.log(bottle)
      const newCart = [...cart, bottle]
      setCart(newCart)
      addToLS(cart)
    }

  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <h3>Cart : {cart.length}</h3>
      <div className='bottle-container'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} handlePur={handlePur} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  )
}
