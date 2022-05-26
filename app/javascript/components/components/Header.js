import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { Nav, NavItem } from 'reactstrap'
// import {Helmet} from 'react-helmet';
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

// begin navbar

//     <div>
//     <div>
//   <Navbar
//    color="dark" dark expand="md" fixed="top">
// </Navbar>
//     </div>

 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <a class="navbar-brand" href="/"></a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
 </button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav mr-auto">
 <li class="nav-item active">

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
 { logged_in &&
<>
<NavItem>
  <NavLink to="/mygooseys">My Gooseys</NavLink>
</NavItem>
<NavItem>
  <NavLink to="/new">Add Goosey</NavLink>
</NavItem>
<NavItem>
  <a href={ sign_out_route }>Sign Out</a>
</NavItem>
</>
}
{ !logged_in &&
<NavItem>
<a href={ sign_in_route }>Sign In</a>
</NavItem>
}
</Nav>
</div>
</nav>  


)
}
} 













// 

//   //  <div>
//     <div>
//   <Navbar
//    color="dark" dark expand="md" fixed="top">
// </Navbar>
//     </div>

export default Header




























//end navbar

//         <>
//         <h1>Loosey Goosey</h1>
//         <Nav>
//           {logged_in &&
//             <NavItem>
//               <a href={sign_out_route} className="nav-link">Sign Out</a>
//             </NavItem>
//           }
//           {!logged_in &&
//             <NavItem>
//               <a href={sign_in_route} className="nav-link">Sign In</a>
//             </NavItem>
//           }
//           {!logged_in &&
//             <NavItem>
//               <a href={new_user_route} className="nav-link">Sign Up</a>
//             </NavItem>
//           }
//         </Nav>

//         <div>
//           <Helmet>
//             <style>{'body { background-color:#000000; }'}</style>
//           </Helmet>

//         </div>

//         </>
//     )
//   }
// }
// export default Header