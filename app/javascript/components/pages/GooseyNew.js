import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { Redirect } from 'react-router-dom'


export default class GooseyNew extends Component {
    constructor(props) {
        super(props)
        this.state ={
          newListing: {
            location_name: "",
            location_category: "",
            specials: "",
            happy_hours: "",
            location_image: "",
            user_id: this.props.current_user_id,
          },
          submitted: false, 
          formIsValid: true
        }
      }

      handleChange = (e) => {
        const { newListing } = this.state
        newListing[e.target.name] =e.target.value
        this.setState ({newListing: newListing})
      }

      handleSubmit = (e) => {
          fetch("/listings", {
            body: JSON.stringify(this.state.newListing),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          })
          .then(response => {
            if(response.status === 200){
              this.setState ({submitted: true})
            } else if(response.status === 422)  {
              this.setState ({formIsValid: false}) 
            }
            return response
          })
          .catch(errors => {
            console.log("create errors:", errors)
          })
  }

    render() {
        return (
            <div>
                <h2>GooseyNew</h2>
                {!this.state.formIsValid && (
                  <div>Form data is not valid</div>
                )}
              <Form>
              <FormGroup>
                <Label for="location_name">Location Name</Label>
                <Input
                  type="text"
                  name="location_name"
                  value={this.state.newListing.location_name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="location_category">Location Category (ie: cocktails, brewery, etc)</Label>
                <Input
                  type="text"
                  name="location_category"
                  value={this.state.newListing.location_category}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="specials">Specials</Label>
                <Input
                  type="text"
                  name="specials"
                  value={this.state.newListing.specials}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="happy_hours">Happy Hours</Label>
                <Input
                  type="text"
                  name="happy_hours"
                  value={this.state.newListing.happy_hours}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="location_image">Image Url</Label>
                <Input
                  type="text"
                  name="location_image"
                  value={this.state.newListing.location_image}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
               onClick={this.handleSubmit} >
                   Add a Goosey
                   </Button>
            </Form>
{ this.state.submitted && <Redirect to="/gooseyindex" />}
            </div>
        )
    }
}