import React, { Component } from "react";
import {
  InputGroup,
  SplitButton,
  Dropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
export class SearchBar extends Component {
  state={
    SearchBy:'search',
  }
  
  handlSubmition = (event) => {
    event.preventDefault();
   
    let keyWord = event.target.status.value;
    let parameter=[keyWord,this.state.SearchBy];
    // console.log(parameter);
    this.props.searchData(parameter)

  };
  
  date=(a)=>{
    this.setState ({
      SearchBy:a,
    })
  }
  genres=(a)=>{
    this.setState ({
      SearchBy:a,
    })

  } 
  tags=(a)=>{
    this.setState ({
      SearchBy:a,
    })
  }
  developers=(a)=>{
    this.setState ({
      SearchBy:a,
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmition}>
          {/* <InputGroup className="mb-3">
            <FormControl
              placeholder="Search For.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              size="lg"
              name="searchQuery"
            />
                      <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" custom name="Status">
            <option value=""> "  " </option>
            <option value="dates">Search by dates </option>
              <option value="tags">Search by tags </option>
              <option value="genres">Search by genres </option>
              <option value="developers">Search by developers </option>
            </Form.Control>
          </Form.Group>
       

            <Button
              type="submit"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup> */}

          <InputGroup  className="mb-3">
            <FormControl name="status" aria-label="Text input with dropdown button" />
            <SplitButton
              type="submit"
              variant="outline-secondary"
              title="Search"
              id="segmented-button-dropdown-2"
              alignRight
            >
              <Dropdown.Item onClick={() => this.date("Dates")} >Search by Dates</Dropdown.Item>
              <Dropdown.Item onClick={() => this.tags("tags")}>Search by Tags</Dropdown.Item>
              <Dropdown.Item onClick={() => this.genres("genres")}>Search by Genres</Dropdown.Item>
              <Dropdown.Item onClick={() => this.developers("developers")}>Search by Developers</Dropdown.Item>
            </SplitButton>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
