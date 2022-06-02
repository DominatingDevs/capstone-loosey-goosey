import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import GooseyIndex from "./pages/GooseyIndex";
import GooseyShow from "./pages/GooseyShow";
import GooseyNew from "./pages/GooseyNew";
import GooseyEdit from "./pages/GooseyEdit";
import NotFound from "./pages/NotFound";
import MyGooseyList from "./pages/MyGooseyList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
 
  render() {
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route,
    } = this.props;

    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>

          <Route path="/aboutus" component={AboutUs} />

          <Route path="/gooseyedit" component={GooseyEdit} />



          <Route path="/gooseyindex" component={GooseyIndex}/>

          <Route path="/gooseynew" component={GooseyNew} current_user={current_user}/>

          {/* <Route path="/gooseyshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let listing = this.state.listings.find(
                (listing) => listing.id === +id
              );
              return <GooseyShow listing={listing} />;
            }}
          /> */}

           <Route path="/mygooseylist" component={MyGooseyList} current_user={current_user}/>


           <Route
            path="/mygooseylist/:id"
              render={ (props) => {
                let id = props.match.params.id;
              let listing = this.state.listings.find(
                (listing) => listing.id === +id
              );
              return <MyGooseyList listing={listing} />;
            }}
            />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
