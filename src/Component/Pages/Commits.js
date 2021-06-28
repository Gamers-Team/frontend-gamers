import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap' 

export default class Commits extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Button
              type="submit"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
