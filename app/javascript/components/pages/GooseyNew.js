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
            happy_hours: "",
            specials: "",
            location_image: ""
          },
          submitted: false
        }
      }

      handleChange = (e) => {
        const { newListing } = this.state
        newListing[e.target.name] =e.target.value
        this.setState ({newListing: newListing})
      }

      handleSubmit = (e) => {
        //   e.preventDefault()
          this.props.createNewListing(this.state.form)
          this.setState ({submitted: true})
  }

    render() {
        return (
            <div>
                <h2>GooseyNew</h2>
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