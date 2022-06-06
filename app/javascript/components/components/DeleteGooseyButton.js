import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class DeleteGooseyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: this.props.listing_id,
    };
    this.deleteListing = this.deleteListing.bind(this);
  }

  deleteListing = () => {
    alert("Delete this listing?");
    fetch(`/listings/${this.state.listing_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.");
        }
        return response.json();
      })
      .then((payload) => {
        console.log(payload);
      })
      .catch((errors) => {
        console.log("delete errors:", errors);
      });
  };

  render() {
    return (
      <NavLink to="/mygooseylist">
        <Button onClick={this.deleteListing}> Delete Listing </Button>
      </NavLink>
    );
  }
}
