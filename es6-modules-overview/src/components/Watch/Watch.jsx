import React from 'react'

export default function Watch({watch}) {
  const {name, price} = watch
  return (
    <div>
      <h3>Name: {name}</h3>
      <h2>price: {price}</h2>
    </div>
  )
}
