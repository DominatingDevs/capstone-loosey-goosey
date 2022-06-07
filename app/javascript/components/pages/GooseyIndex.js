import React, { Component } from "react";
import { Card, CardTitle, Col, ListGroupItemHeading, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class GooseyIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listings: props.listings,
    };
  }

  render() {
    return (
      <>
      <h3>All the Listings</h3>
        <div className="cards">
          {this.state.listings && this.state.listings.map((listing) => {
            return (
              <div className="card" key={listing.id}>
                <h2 className="card-header">{listing.location_name}</h2>
                <img className="card-img-top" src={listing.location_image} />
                <div className="card-body">
                  <p className="card-text">{listing.specials}</p>
                  <p className="card-text">{listing.location_category}</p>
                  <p className="card-text">{listing.happy_hours}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}