import React, { useEffect, useState } from 'react'

export default function Users() {

    const [user, setUser] = useState([])

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))

    }, [])
  return (
    <div>
      <h3>Users: {user.length}</h3>
    </div>
  )
}


/***
 * 1. declare a state to hold the data
 * 2. useEffect with call back  and dependency array 
 * 3. use fetch to load data
 * 4. 
 * 
 */ 
