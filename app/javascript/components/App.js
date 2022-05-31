import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import GooseyIndex from './pages/GooseyIndex'
import GooseyShow from './pages/GooseyShow'
import GooseyNew from './pages/GooseyNew'
import GooseyEdit from './pages/GooseyEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }
  
  render () {
    return (
      <Router>
      <Header {...this.props} />
      <Switch>
        
        <Route exact path="/"> <Home /> </Route>

        <Route path="/aboutus" component={AboutUs} />

      </Switch>
    </Router>
    
    )
  }
}

export default App
