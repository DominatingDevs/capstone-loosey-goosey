import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";
import DeleteGooseyButton from "../components/DeleteGooseyButton";
import EditGooseyButton from "../components/EditGooseyButton";

export default class GooseyEdit extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      listing: {
        location_name: this.props.listing?.location_name,
        location_category: this.props.listing?.location_category,
        specials: this.props.listing?.specials,
        happy_hours: this.props.listing?.happy_hours,
        location_image: this.props.listing?.location_image,
      },
      submitted: false,
      formIsValid: true,
    };
  }

  handleChange = (e) => {
    const { listing } = this.state;
    listing[e.target.name] = e.target.value;
    this.setState({ listing: listing });
  };

  handleSubmit = () => {
    this.props.editListing(this.state.listing, this.props.listing.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      //

      <>
      
        <div className="form-container">
          <div className="form">
            <Form>
              <FormGroup>
                <Label>Location Name</Label>
                <Input
                  type="text"
                  name="location_name"
                  onChange={this.handleChange}
                  value={this.state.listing.location_name}
                />
              </FormGroup>
              <FormGroup>
                <Label>Location Category</Label>
                <Input
                  type="text"
                  name="location_category"
                  onChange={this.handleChange}
                  value={this.state.location_category}
                />
              </FormGroup>
              <FormGroup>
                <Label>Specials</Label>
                <Input
                  type="text"
                  name="specials"
                  onChange={this.handleChange}
                  value={this.state.specials}
                />
              </FormGroup>
              <FormGroup>
                <Label>Happy Hours</Label>
                <Input
                  type="text"
                  name="happy_hours"
                  onChange={this.handleChange}
                  value={this.state.happy_hours}
                />
              </FormGroup>
              <FormGroup>
                <Label>Image URL</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.location_image}
                />
              </FormGroup>

              <Button name="submit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
        {this.state.submitted && <Redirect to="/mygooseylist" />}
      </>
    );
  }
}

//
//             <div>
//                 <h2>GooseyEdit</h2>
//             </div>
//         )
//     }
// }
