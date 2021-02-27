import {INCREMENT,DECREMENT,EDITTEXT} from './actionTypes'


export const increment = () => ({type:INCREMENT})

export const decrement = () => ({type:DECREMENT})

export const setText = (text) => ({type:EDITTEXT,text:text})