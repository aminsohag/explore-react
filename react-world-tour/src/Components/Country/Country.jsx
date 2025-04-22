import React from 'react'
import './Country.css'

export default function Country( {country} ) {
    console.log(country)
    const {name, flags} = country
  return (
    <div className='country-css'>
      <h3>Name : {name?.common} </h3>
      <img src={flags.png} alt="" />
    </div>
  )
}
