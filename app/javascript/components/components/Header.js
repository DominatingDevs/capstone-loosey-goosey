import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import homebutton from '../assets/homebutton.png'



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
            <>
                <div class="logonav">
                    <a id='short' href="/"><img className="homebutton" src={homebutton} scale="0"></img></a>
                </div>
                <div className="listview-title mt-2">

                    <NavLink to="/"> </NavLink>
                    <Nav>
                        <NavItem>
                            <NavLink to="/gooseyindex">View All </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/mygooseylist">My Listings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/gooseynew">Add A Listing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/aboutus">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <a href={sign_out_route}>Sign Out</a>
                        </NavItem>

                        {!logged_in &&
                            <NavItem>
                                <a href={sign_in_route}>Sign In</a>
                            </NavItem>
                        }
                    </Nav>
                </div>
            </>
        )
    }
}

export default Header