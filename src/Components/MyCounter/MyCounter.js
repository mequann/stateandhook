import React, { Component } from 'react'
import "./Mycounter.css"
import CounterDisplayer from "./CounterDisplayer"
import EvenCounterDisplayer from"./EvenCounterDisplayer"

 class MyCounter extends Component {
     constructor(props) {
 super(props)
 this.state={
     counter:0
 }
         
     }
     allClicksCounter=()=>{
        this.setState((prevstate)=>{return {
             counter :  prevstate.counter+1
        }})
     }
     decrement=()=>{
        this.setState((prevstate)=>{
            return {counter:prevstate.counter-1}
        })
     }
     reset=()=>{
        this.setState(()=>{ return {counter:0}})
     }
     
  render() {
    let {counter}=this.state
    let n=counter

    return (
      <div className='valuecontrol'>
        <button className='btn' onClick={this.allClicksCounter}>increment</button>
        <button className='btn' onClick={this.decrement}>decrement</button>
        <button className='btn' onClick={this.reset}>reset</button>
        <CounterDisplayer counter ={counter}/>
        <EvenCounterDisplayer  evenCount={n%2===0?n:n-1}/>
        <h3 > the count value is:{n%2===0?n:n-1}</h3>
      </div>
    )
  }
}
export default MyCounter