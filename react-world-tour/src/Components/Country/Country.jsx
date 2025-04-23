import React, { useState } from 'react'
import './Country.css'

export default function Country( {country, handleVisitedCountry} ) {
    
    const {name, flags, capital, cca3, population, area} = country;

    const [visited, setVisited] = useState(false)

    const handleBtn = () => {
        setVisited(!visited)
    }


  return (
    <div className={`country-css ${visited && 'visited'}`}>
      <h3>Name : {name?.common} </h3>
      <h4>Capital: {capital}</h4>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visit</button>
      <button onClick={handleBtn}>{visited ? 'visited' : 'visit'}</button>
      {/* {visited ? 'i am visited': 'i want visited'} */}
    </div>
  )
}
