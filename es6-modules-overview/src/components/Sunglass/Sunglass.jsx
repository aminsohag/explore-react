import React from 'react'
import { add, multi } from '../Utilities/Calculate';
import Watch from '../Watch/Watch';

export default function Sunglass() {

    const first = 25;
      const second = 35;
      const sum = add(first, second)
      const mul = multi(first , second)
      console.log(sum, mul)
  return (
    <div>
    
   
    </div>
  )
}
