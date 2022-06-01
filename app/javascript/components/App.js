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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    this.readListing();
  }

  readListing = () => {
    fetch("/listings")
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.setState({ listings: payload });
      })
      .catch((errors) => {
        console.log("Gooseys read errors:", errors);
      });
  };

  render() {
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route,
    } = this.props;
    const { listings } = this.state;

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
          <Route
            path="/gooseyindex"
            render={(props) => <GooseyIndex listings={this.state.listings} />}
          />
          <Route path="/gooseynew" component={GooseyNew} />
          <Route
            path="/gooseyshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let listing = this.state.listings.find(
                (listing) => listing.id === +id
              );
              return <GooseyShow listing={listing} />;
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
