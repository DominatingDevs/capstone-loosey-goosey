import React, { Component } from 'react'

export default class GooseyShow extends Component {
    render() {
        
        return (
            <div>
                 <h2> Listings</h2>
                {this.props.listing &&
                  <div>
                <h4> Location Name </h4>
                <p> {this.props.listing.location_name}</p>
                <h4> Location Category </h4>
                <p> {this.props.listing.location_category}</p>
                <h4> Specials </h4>
                <p> {this.props.listing.specials}</p>
                <h4> Happy Hours </h4>
                <p> {this.props.listing.happy_hours}</p>
                <img src={this.props.location_image} width="200" height="200" />
              
              </div>
          }     </div>
        );
    }
}
