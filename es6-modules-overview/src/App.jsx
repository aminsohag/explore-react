import { useEffect, useState } from 'react'
import './App.css'
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'


function App() {

  const [watches, setWatches ] = useState([])

  useEffect( () => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data)) 
  }, [])

  // const Watches = [
  //   {id: 1, name: 'apple', price: 2000},
  //   {id: 2, name: 'samsung', price: 3000},
  //   {id: 3, name: 'oppo', price: 4000},
  // ]

  // const Watches =  [
  //     { id: 1, name: "Casio G-Shock GA-100", price: 120 },
  //     { id: 2, name: "Fossil Grant Chronograph", price: 150 },
  //     { id: 3, name: "Seiko 5 Automatic", price: 130 },
  //     { id: 4, name: "Timex Weekender", price: 65 },
  //     { id: 5, name: "Rolex Submariner", price: 8500 }
  // ]
  
  
  
  return (
    <>

      <h1>Vite + React</h1>
      <Sunglass></Sunglass>
      {
        watches.map(watch => <Watch key={watches.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
