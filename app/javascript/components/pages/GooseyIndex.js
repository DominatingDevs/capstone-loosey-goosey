import React, { Component } from "react";
import { Card, CardTitle, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class GooseyIndex extends Component {

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
    return (
      <>
        


<Row className="cards">
{this.state.listings.map((listing) => {
  return (
    <Col sm="4" key={listing.id}>
<div className="card">
<img className="card-img-top" src={listing.location_image}/> 
<div className="card-body">
<p className="card-header">{listing.location_name}</p>
<p className="card-text">{listing.specials}</p>
<p className="card-text">{listing.location_category}</p>
<p className="my-card-button">                  
</p>
</div>
</div>
</Col>
);
})}
</Row>
</>
);
}
}