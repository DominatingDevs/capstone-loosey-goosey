import React, { Component } from 'react'
import logo from '../assets/logo.png'

export default class Home extends Component {
  render() {
    return (
      <div className="homenav">
        <a id='short' href="/gooseyindex"><img className="logo" src={logo} scale="0"></img></a>
      </div>
    )
  }
}