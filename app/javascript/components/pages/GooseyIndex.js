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
        <h3>All the Listings</h3>
        <Row className="cards">
          {this.state.listings.map((listing) => {
            return (
              <Col sm="4" key={listing.id}>
                <Card body>
                  <CardTitle>
                    <h5>{listing.location_name}</h5>
                    <h5>
                      {listing.specials}, {listing.happy_hours}{" "}
                      {listing.location_category}, {listing.location_image},
                    </h5>
                    <p className="card-button">
                      <NavLink to={`/listing/${listing.id}`}></NavLink>
                    </p>
                  </CardTitle>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
