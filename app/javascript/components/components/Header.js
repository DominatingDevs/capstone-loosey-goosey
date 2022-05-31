import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        return (


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                        </li>
                    </ul>
                </div>


                <div className="header-main">
                    <NavLink to="/"> </NavLink>
                    <Nav>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/gooseyindex">All the Gooseys</NavLink>
                        </NavItem>

                        <>
                            <NavItem>
                                <NavLink to="/gooseyshow">My Gooseys</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/gooseynew">Add Goosey</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/aboutus">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <a href={sign_out_route}>Sign Out</a>
                            </NavItem>
                        </>

                        {!logged_in &&

                            <NavItem>
                                <a href={sign_in_route}>Sign In</a>
                            </NavItem>
                        }
                    </Nav>
                </div>
            </nav>


        )
    }
}


export default Header


