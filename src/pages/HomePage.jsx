import React from 'react'

import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "../redux/slices/cartSlice"


const HomePage = () => {
    const dispatch = useDispatch()
  return (
    <div>Home Page
        <button onClick={() =>{dispatch(increment())}}>
            Increament
        </button>

        <button onClick={() =>{dispatch(decrement())}}>
            Decrement
        </button>

        <button onClick={() =>{dispatch(incrementByAmount(20))}}>
            By Payload
        </button>
    </div>
  )
}

export default HomePage