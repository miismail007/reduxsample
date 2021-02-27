import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement, setText } from '../store/action'

function HeroSection() {
    const data = useSelector(state => state)
    const {counter,text} = data
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <h1>{text}</h1>
            <button onClick={()=>{dispatch(increment())}} >+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
        </div>
    )
}

export default HeroSection
