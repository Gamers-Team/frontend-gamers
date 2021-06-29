import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap' 
import axios from "axios";

export default class Commits extends Component {

  handleFeedback=(event)=>{
    event.preventDefault();
    let username=event.target.name.value
    let feedback=event.target.feedback.value

    
    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/addfeedback`;
    let object={
      username:username,
      feedback:feedback,
      id:this.props.id,
    }
    axios.post(url, object).then((result) => {
      // console.log(result.data);
    });
    
    this.props.updata(object)

  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFeedback}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name={'name'} type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Feedback</Form.Label>
            <Form.Control name={'feedback'}  as="textarea" rows={3} />
            <Button
              type="submit"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              Submit 
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
