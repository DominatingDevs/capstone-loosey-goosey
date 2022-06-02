import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import DeleteGooseyButton from '../components/DeleteGooseyButton';

export default class MyGooseyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myListings: [],
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

        
  render() {
    return (
        <>
        <h3>My Listings</h3>
        <Row className="cards">
            { this.state.myListings.map(listing => {
              return (
                <Col sm="4" key={ listing.id }>
                  <div className="my-show-card">
                    <h4>Location Name</h4>
                    <h5> {listing.location_name }</h5>
                    <br />
                    <h4>Location Category</h4>
                    <h5>{listing.location_category }</h5>
                    <br />
                    <h4>Specials</h4>
                    <h5>{ listing.specials }</h5>
                    <h4>Happy Hours</h4>
                    <h5>{ listing.happy_hours }</h5>
                    <br />
                    <img src={listing.location_image} width="200" height="200" />
                    <p className="my-card-button">
                   <NavLink to={`/listingedit/${listing.id}`}>
                     <Button>Edit Listing </Button>
                   </NavLink>

                  <DeleteGooseyButton listing_id={listing.id} />
                  </p>
            </div>
          </Col>
              )
            })}
        </Row>
        </>
      )
    }
}
    
  
