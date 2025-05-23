import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './Countries.css'

export default function Countries() {

  const [countries, setCountries] = useState([])

  const [visitedCountries, setVisitedCountries] =useState([])
  const [visitedFlag, setVisitedFlag] = useState([])

  useEffect( ()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleVisitedCountry = (country) => {
    console.log('add country')
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
    
  }

  const handleVisitedFlag = (flag) => {
    console.log('flag adding')
    const newVisitedFlag = [...visitedFlag, flag]
    setVisitedFlag(newVisitedFlag)
  }

  // remove item form an array in a state
  // use filter to select all the elements excepts the you want to remove 

  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h4>Visited Countries!! : {visitedCountries.length}</h4>
        <ul className='coun-css'>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className='flag-container'>
        {
          visitedFlag.map(flag => <img src={flag}></img>)
        }
      </div>
      <div className='country-container'>
      {
        countries.map(country =><Country key={country.cca3} 
          handleVisitedCountry={handleVisitedCountry} 
          handleVisitedFlag={handleVisitedFlag} 
          country={country}></Country>)
      }
      </div>
    </div>
  )
}


