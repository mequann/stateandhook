import React, { Component } from 'react'

 class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2>You clickec the button:{this.props.counter} times</h2>
      </div>
    )
  }
}
export default CounterDisplayer