import React, { Component } from "react";
import { FormControl, Button } from "react-bootstrap/";
import InputGroup from "react-bootstrap/InputGroup";

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmition}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search For.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              size="lg"
              name="searchQuery"
            />
            <Button
              type="submit"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
