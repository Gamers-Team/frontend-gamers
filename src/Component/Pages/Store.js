import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import GamesFromModal from "./GamesFromModal";
import "./Store.css";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

export class Store extends Component {
  state = {
    gamesData: [],
    error: "",
    showModal: false,
    item: [],
    photos: [],
    genres: [],
    feedback: [],
    username: [],
    parent_platforms: [],
    value: "all",
    keyWord: "",
    searchBy: "search",
    flage: true,
  };
  componentDidMount() {
    this.getGamesInfo();
  }

  searchData = (arr) => {
    // this.setState({
    //   keyWord:data[0],
    //   searchBy:data[1],
    // })

    let serverURL = process.env.REACT_APP_SERVER;
    let keyWord = arr[0];
    let searchBy = arr[1];

    // http://localhost:3001/games?keyword=&searchBy=

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
  };

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
      genres: item.genres,
      parent_platforms: item.parent_platforms,
      feedback: item.feedback,
      username: item.username,

    });
    this.showModal();
  };

  // add data for DataBase to Cart

  addtocart = (item) => {
    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/addToCart`;
    let email = this.props.auth0.user.email;
    let objectItem = {
      name: item.name,
      email: email,
      background_image: item.background_image,
      playtime: item.playtime,
    };
    // console.log(objectItem);

    axios.post(url, objectItem).then((result) => {
      console.log(result.data);
    });
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
    const { isAuthenticated } = this.props.auth0;

    return (
      <div>
        {/* <h3>Discover Below!</h3> */}
        <SearchBar searchData={this.searchData} />

        {/* <hr></hr> */}
        
        {typeof this.state.gamesData == "string" ? (
          <p>{this.state.gamesData}</p>
        ) : (
          <div className="editDivCard">
            {this.state.gamesData.map((item, idx) => {
              return (
                <Card className="editCard" style={{ width: "18rem" }} key={idx}>
                  <Card.Img className="editImgCard" variant="top" src={item.background_image} />
                  <Card.Body className="editCardBody">
                    <Card.Title  className="editCardTitle">{item.name}</Card.Title>
                    <Card.Text>
                      {" "}
                      {/* <ImStarFull className="editRateStar" /> */}
                        Rating: {item.rating}/5 ⭐
                    </Card.Text>
                    <Card.Text>Ratings Count: {item.ratings_count} </Card.Text>

                    {Number(item.playtime) ? (
                      <Card.Text>Price : {item.playtime}$</Card.Text>
                    ) : (
                      <Card.Text>
                        Price : 15 
                      </Card.Text>
                    )}

                    <Button
                      variant="dark"
                      onClick={() => this.showGames(item)}

                    >
                      See More...
                    </Button>

                    {isAuthenticated &&  (
                      <Button
                        variant="dark"
                        onClick={() => this.addtocart(item)}
                      >
                        Add To Cart
                      </Button>
                    )}
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
          genres={this.state.genres}
          parent_platforms={this.state.parent_platforms}
          feedback={this.state.feedback}
          username={this.state.username}
          flage={this.state.flage}
        />
      </div>
    );
  }
}
export default withAuth0(Store);
