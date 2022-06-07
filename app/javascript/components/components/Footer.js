import React, { Component } from 'react'
import footerpic from '../assets/footerpic.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="appFooter">
                <img src={footerpic} alt="icon" className="footer-logo mb-2"/>
                    <div className="footer-title">
                     Copyright © Dominating Devs. All Rights Reserved.
                </div>
           </div>
          )
        }
     }