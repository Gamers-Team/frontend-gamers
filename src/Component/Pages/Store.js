import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import GamesFromModal from "./GamesFromModal";
import "./Store.css";
import SearchBar from "./SearchBar";
import { keyword } from "chalk";

export class Store extends Component {
  state = {
    gamesData: [],
    error: "",
    showModal: false,
    item: [],
    photos: [],
    value: "all",
    keyWord: "",
    searchBy: "search",
  };
  componentDidMount() {
    this.getGamesInfo();
  }

  searchData=(arr)=>{
    // this.setState({
    //   keyWord:data[0],
    //   searchBy:data[1],
    // })


    let serverURL = process.env.REACT_APP_SERVER;
    let keyWord = arr[0];
    let searchBy = arr[1];

    let url = `${serverURL}/games?keyword=${keyWord}&searchBy=${searchBy}`;
    axios
      .get(url)
      .then((data) => {
        this.setState({ gamesData: data.data, error: "" });
      })
      .catch((error) => {
        this.setState({ error: "THERE IS AN ERROR" });
      });

      console.log(this.state.error);
    
  }


  getGamesInfo = () => {

    let serverURL = process.env.REACT_APP_SERVER;
    let keyWord = "";
    let searchBy = "search";

    let url = `${serverURL}/games?keyword=${keyWord}&searchBy=${searchBy}`;
    axios
      .get(url)
      .then((data) => {
        this.setState({ gamesData: data.data, error: "" });
      })
      .catch((error) => {
        this.setState({ error: "THERE IS AN ERROR" });
      });
  };
  showModal = () => {
    this.setState({ showModal: true });
  };
  showGames = (item) => {
    this.setState({
      item: item,
      photos: item.short_screenshots,
    });
    this.showModal();
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  priceChoosen = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <SearchBar searchData={this.searchData} />

        {typeof this.state.gamesData == "string" ? (
          <p>{this.state.gamesData}</p>
        ) : (
          <div>
            {this.state.gamesData.map((item, idx) => {
              return (
                <Card className="editCard" style={{ width: "18rem" }} key={idx}>
                  <Card.Img variant="top" src={item.background_image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Rating: {item.rating} /5</Card.Text>
                    <Card.Text>Ratings Count: {item.ratings_count} </Card.Text>
                    <Card.Text>Price : {item.playtime} $ </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.showGames(item)}
                    >
                      More...
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
        <GamesFromModal
          show={this.state.showModal}
          closeFunc={this.closeModal}
          item={this.state.item}
          photos={this.state.photos}
        />
      </div>
    );
  }
}
export default withAuth0(Store);
