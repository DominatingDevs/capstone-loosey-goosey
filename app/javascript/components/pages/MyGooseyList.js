import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import DeleteGooseyButton from "../components/DeleteGooseyButton";
import EditGooseyButton from "../components/EditGooseyButton";

export default class MyGooseyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myListings: [],
      id: 1,
      user_id: this.props.current_user_id,
      submitted: false,
      formIsValid: true,
    };
  }

  componentDidMount() {
    this.readListing();
  }

  readListing = () => {
    fetch("/listings?me=true")
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.setState({ myListings: payload });
      })
      .catch((errors) => {
        console.log("Gooseys read errors:", errors);
      });
  };

  handleChange = (e) => {
    const { myListing } = this.state;
    newListing[e.target.name] = e.target.value;
    this.setState({ editListing: editListing });
  };

  handleSubmit = (e) => {
    fetch("/listings", {
      body: JSON.stringify(this.state.myListing),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ submitted: true });
        } else if (response.status === 422) {
          this.setState({ formIsValid: false });
        }
        return response;
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  render() {
    return (
      <>
        <h3>My Listings</h3>
        <Row className="cards">
          {this.state.myListings.map((listing) => {
            return (
              <Col sm="4" key={listing.id}>
                <div className="my-show-card">
                  <h4>Location Name</h4>
                  <h5> {listing.location_name}</h5>
                  <br />
                  <h4>Location Category</h4>
                  <h5>{listing.location_category}</h5>
                  <br />
                  <h4>Specials</h4>
                  <h5>{listing.specials}</h5>
                  <h4>Happy Hours</h4>
                  <h5>{listing.happy_hours}</h5>
                  <br />
                  <img src={listing.location_image} width="200" height="200" />
                  <p className="my-card-button">
                    <NavLink to={`/gooseyedit/${listing.id}`}>
                      <Button>Edit Listing </Button>
                    </NavLink>

                    <DeleteGooseyButton listing_id={listing.id} />
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
