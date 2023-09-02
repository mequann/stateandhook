import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div><h3>Ecen Clicks counter is:{this.props.evenCount}</h3></div>
    )
  }
}
