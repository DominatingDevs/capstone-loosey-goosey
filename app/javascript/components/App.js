import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
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
        <Route exact path="/" component={Home} />

        {/* <Route path="/gooseyindex" render={(props) => <GooseyIndex gooseys={this.state.gooseys} />} />

        <Route path="/gooseyshow/:id" render={(props) => {
        let id = +props.match.params.id
        let goosey = this.state.goosey.find(goosey => goosey.id === +id)
        return <GooseyShow deleteGoosey={this.deleteGoosey} goosey={goosey} />
      }} /> */}

      {/* {logged_in &&
      <Route path="mygoosey" render= {(props) => { 
      let mygoosey = this.state.gooseys.find(goosey => goosey.user_id === current_user.id) />
      }}} /> */}

        <Route path="/gooseynew" component={GooseyNew} />

        <Route path="/gooseyedit" component={GooseyEdit} />

        <Route component={NotFound}/>

      </Switch>
    </Router>
    
    )
  }
}

export default App
