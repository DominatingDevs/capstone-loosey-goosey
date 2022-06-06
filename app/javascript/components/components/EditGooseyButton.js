import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class EditGooseyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: this.props.listing_id,
    };
    this.editListing = this.editListing.bind(this);
  }

  editListing = (e) => {
    fetch(`/listings/${this.state.listing_id}`, {
      body: JSON.stringify(this.state.editListing),
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
        return response.json();
      })
      .then((payload) => {
        console.log(payload);
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  render() {
    return (
      <NavLink to="/gooseyedit">
        <Button onClick={this.editListing}> Edit Listing </Button>
      </NavLink>
    );
  }
}
