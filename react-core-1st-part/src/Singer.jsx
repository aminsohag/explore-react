import React from 'react'

export default function Singer({singer}) {
  return (
    <div>
      <li>Name :{singer.name} </li>
      <li>Age :{singer.age} </li>
    </div>
  )
}
