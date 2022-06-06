import React, { Component } from 'react'

export default class GooseyShow extends Component {
    render() {
        
        return (
            <div>
                 <h2> Listings</h2>
                {this.props.listing &&
                  <div>
                <p> {this.props.listing.location_name}</p>
                <p> {this.props.listing.location_category}</p>
                <p> {this.props.listing.happy_hours}</p>
                <p> {this.props.listing.specials}</p>
                <p> {this.props.listing.location_image}</p>
                <img src={this.props.listing.image} width="200" height="200" />
                  </div>}
            </div>
        );
    }
}
