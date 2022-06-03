import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import DeleteGooseyButton from '../components/DeleteGooseyButton'
import EditGooseyButton from '../components/EditGooseyButton'

export default class GooseyEdit extends Component {
    constructor(props) {
        super(props)
        this.state ={
          editListing: {
            id: 23,
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
        const { editListing } = this.state
        newListing[e.target.name] =e.target.value
        this.setState ({editListing: editListing})
      }


      handleSubmit = (e) => {
        fetch("/listings", {
          body: JSON.stringify(this.state.editListing),
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
            // 
    
            <>
            <h3>Edit Listing</h3>
            <div className="form-container">
              <div className="form">
                <Form>
                  <FormGroup>
                    <Label>Location Name</Label>
                    <Input
                      type="text"
                      name="location_name"
                      onChange={ this.handleChange }
                      value={ this.state.location_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Location Category</Label>
                    <Input
                      type="text"
                      name="location_category"
                      onChange={ this.handleChange }
                      value={ this.state.location_category }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Specials</Label>
                    <Input
                      type="text"
                      name="specials"
                      onChange={ this.handleChange }
                      value={ this.state.specials }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Happy Hours</Label>
                    <Input
                      type="text"
                      name="happy_hours"
                      onChange={ this.handleChange }
                      value={ this.state.happy_hours }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Image URL</Label>
                    <Input
                      type="text"
                      name="email"
                      onChange={ this.handleChange }
                      value={ this.state.location_image }
                    />
                  </FormGroup>

                  <Button
                    name="submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            {this.state.submitted && <Redirect to={`/mygooseylist/:id ${this.state.listing.id}`} />}
          </>
        )
      }
    }





















            // 
//             <div>
//                 <h2>GooseyEdit</h2>
//             </div>
//         )
//     }
// }









