import React, { Component } from 'react'
import theflock from '../assets/theflock.png'


export default class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <img src={theflock}></img>
      </div>
    )
  }
}