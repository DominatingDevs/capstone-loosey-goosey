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
        <div className="cards">
          {this.state.myListings.map((listing) => {
            return (
              <div className="card" key={listing.id}>
                <h2 className="card-header">{listing.location_name}</h2>
                <img className="card-img-top" src={listing.location_image} />
                <div className="card-body">
                  <p className="card-text">{listing.specials}</p>
                  <p className="card-text">{listing.location_category}</p>
                  <p className="card-text">{listing.happy_hours}</p>
                  <NavLink to={`/gooseyedit/${listing.id}`}>
                    <Button>Edit Listing </Button>
                  </NavLink>

                  <DeleteGooseyButton listing_id={listing.id} />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

