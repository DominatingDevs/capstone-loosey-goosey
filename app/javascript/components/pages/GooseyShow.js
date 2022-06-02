import React, { Component } from 'react'

export default class GooseyShow extends Component {
    render() {
        
        return (
            <div>
                <h2>Goosey Show</h2>
                {this.props.listing &&
                  <div>
                <p> {this.props.listing.dishname}</p>
                <p> {this.props.listing.genre}</p>
                <p> {this.props.listing.category}</p>
                <img src={this.props.listing.image} width="200" height="200" />
                  <NavLink to={`/listingedit/${this.props.listing.id}`}>
                    <Button>Edit Listing Profile</Button>
                  </NavLink>

                  <NavLink to= "/listingindex">
                    <Button onClick={ () => this.props.deleteListing(this.props.listing.id)}> Delete Food Profile </Button>
                  </NavLink>
                
                  </div>}
            </div>
        );
    }
}
