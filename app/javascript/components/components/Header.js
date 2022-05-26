import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Helmet } from "react-helmet"

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
        <h1>Loosey Goosey</h1>
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>

        <div>
          <Helmet>
            <style>{'body { background-color:#2cd5eb; }'}</style>
          </Helmet>

        </div>

        </>
    )
  }
}
export default Header