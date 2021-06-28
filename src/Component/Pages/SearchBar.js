import React, { Component } from "react";
import {
  InputGroup,
  SplitButton,
  Dropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./SearchBar.css";
export class SearchBar extends Component {
  state = {
    SearchBy: "search",
  };

  handlSubmition = (event) => {
    event.preventDefault();

    let keyWord = event.target.status.value;
    let parameter = [keyWord, this.state.SearchBy];
    // console.log(parameter);
    this.props.searchData(parameter);
  };

  date = (a) => {
    this.setState({
      SearchBy: a,
    });
  };
  genres = (a) => {
    this.setState({
      SearchBy: a,
    });
  };
  tags = (a) => {
    this.setState({
      SearchBy: a,
    });
  };
  developers = (a) => {
    this.setState({
      SearchBy: a,
    });
  };

  render() {
    return (
      <div className="editsearchBar">
        <form onSubmit={this.handlSubmition}>
          <InputGroup className="mb-3">
            <FormControl
              className="searchBAR"
              name="status"
              aria-label="Text input with dropdown button"
              aria-describedby="basic-addon2"
            />
            <SplitButton
           
              type="submit"
              variant="secondary"
              title="Search"
              id="segmented-button-dropdown-2"
            >
              <Dropdown.Item onClick={() => this.date("Dates")}>
                Search by Dates
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.tags("tags")}>
                Search by Tags
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.genres("genres")}>
                Search by Genres
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.developers("developers")}>
                Search by Developers
              </Dropdown.Item>
            </SplitButton>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
