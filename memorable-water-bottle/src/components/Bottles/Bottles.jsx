import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { addToLS, getStoredCart } from '../../utilities/localstorage'
import Cart from '../Cart/Cart'

export default function Bottles() {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])


    useEffect( ()=> {
      console.log(bottles.length)
      if(bottles.length > 0){
        const stordCart = getStoredCart()
        console.log(stordCart, bottles)
        const saveCart = []
        for(const id of stordCart){
          console.log(id)
          const bottle = bottles.find(bottle => bottle.id === id)
          
          if(bottle){
            saveCart.push(bottle)
          }
        }
        console.log(saveCart)
        setCart(saveCart)
      }
    },[bottles])

    const handlePur = (bottle) => {
      // console.log(bottle)
      const newCart = [...cart, bottle]
      setCart(newCart)
      addToLS(bottle.id)
    }

  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <Cart cart={cart}></Cart>
      <div className='bottle-container'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} handlePur={handlePur} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  )
}
