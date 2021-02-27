import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { increment,decrement, setText } from '../store/action'

function Header() {
    const data = useSelector(state => state)
    const {counter,text} = data
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{dispatch(increment())}} >+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <h2>{text}</h2>
            <input type="text" onChange={(text)=>{dispatch(setText(text.target.value))}}/>
            <Link to="/">Home</Link>
            <Link to="/notification">Notification</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Header
