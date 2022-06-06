import React, { Component } from 'react'
import footerpic from '../assets/footerpic.png'

export default class Footer extends Component {
    render() {
        return (
            <div class="appFooter">
            <img src={footerpic} alt="icon" class="footer-logo mb-2"/>
            <div class="footer-title">
            Copyright © Dominating Devs. All Rights Reserved.
            </div>
           </div>
          )
        }
    }