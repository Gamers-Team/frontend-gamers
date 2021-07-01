import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap' 
import axios from "axios";
import"./Commits.css"

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
    };

    axios.post(url, object).then((result) => {
      // console.log(result.data);
    });
    
    this.props.getfeedback(object)
    // this.props.update(object)

  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFeedback}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control className="feedbackName" name={'name'} type="text" placeholder="Please Enter Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control name={'feedback'}  as="textarea" rows={3} placeholder="Please Enter Your Feedback" />
            <Button
            className="addFeedBackButton"
              type="submit"
              size="lg"
              variant="outline-dark"
              id="button-addon2"
            >
              Add FeedBack 
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
