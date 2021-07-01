import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// import Form from 'react-bootstrap/Form';
import axios from "axios";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultData: [],
      error: false,
      errorMessage: "",
      platform: "3d games",
    };
  }
  changingPlatform = async (choice) => {
    this.setState({
      platform: choice,
    });
    console.log(this.state.platform);
    const url = `https://newsapi.org/v2/everything?domains=gameinformer.com,destructoid.com&q=${this.state.platform}&sortBy=popularity&apiKey=3c9471ccb160424d9d34f0326977cc88`;
    try {
      const news = await axios.get(url);
      console.log(news.data.articles);
      this.setState({
        defaultData: news.data.articles,
      });
      console.log(this.state.defaultData);
    } catch (err) {
      this.setState({
        errorMessage: err,
        error: true,
      });
    }
    // this.setState({
    //     platform: choice,
    // })
    // console.log(choice);
    // this.componentDidMount();
  };
  test = (test) => {
    console.log(test);
    this.setState({
      platform: test,
    });
    // this.changingPlatform();
  };
  componentDidMount = async () => {

    console.log(this.state.platform);
    const url = `https://newsapi.org/v2/everything?domains=gameinformer.com,destructoid.com&q=games%20And%20gaming&sortBy=popularity&apiKey=3c9471ccb160424d9d34f0326977cc88`;
    try {
      const news = await axios.get(url);
      console.log(news.data.articles);
      this.setState({
        defaultData: news.data.articles,
      });
      console.log(this.state.defaultData);
    } catch (err) {
      this.setState({
        errorMessage: err,
        error: true,
      });
    }
    // this.getnews();
  };

getnews=()=>{


  const url=process.env.REACT_APP_SERVER;
  axios.get( `${url}/news` ).then(news=>{
      this.setState({
          defaultData: news.data
        });
  })
  .catch((err)=>{
      this.setState({
          errorMessage: err,
          error: true,
        });
  })
} 

  
  render() {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.destructoid.com/wp-content/uploads/2021/06/Shadowrun-Dragonfall-artwork.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>
                Shadowrun Trilogy is free to claim during the GOG Summer Sale
              </h3>
              <p>
                Just as one summer sale starts, another is coming to a close.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.destructoid.com/wp-content/uploads/2021/06/witchercon-new-game-reveal-1536x977.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>
                CDPR confirms no new Witcher game to be revealed at WitcherCon
              </h3>
              <p>
                CD Projekt RED is teaming up with Neflix in order to present a
                special live stream next month, entirely based around the
                fantasy franchise, The Witcher.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.destructoid.com/wp-content/uploads/2021/06/Drizzt-Art-1536x927.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Extremely Giorgio A. Tsoukalos voice:: Dungeons</h3>
              <p>
                Magic: The Gathering‘s Dungeons and Dragons set is so thematic
                that the lands have flavor text.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Navbar className="navBar" variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>Search the latest Games News </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Browse by platform"
                >
                  <NavDropdown.Item
                    bg="dark"
                    variant="dark"
                    className="drop"
                    onClick={() => this.changingPlatform("xbox")}
                  >
                    Xbox one
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onSelect={() => this.changingPlatform("pc")}
                  >
                    PC
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onSelect={() => this.changingPlatform("3ds")}
                  >
                    3Ds
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item >Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <InputGroup className="mb-3">
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={() => this.changingPlatform(this.state.platform)}
            >
              Search By Name
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              className="search"
              onChange={(event) => this.test(event.target.value)}
            />
          </InputGroup>
        </Navbar>
        <Row xs={1} md={3} className="g-4 ">
          {this.state.defaultData.map((element) => {
            return (
              <Col>
                <Card className="adding">
                  <Card.Img
                    variant="top"
                    src={element.urlToImage}
                    className="textlong1"
                  />
                  <Card.Body>
                    <Card.Title className="textlong2">
                      {element.title}
                    </Card.Title>
                    <Card.Text className="textlong3">
                      {element.description}
                    </Card.Text>
                    <Card.Text>
                      The Publish date is :{element.publishedAt}
                    </Card.Text>
                    <Card.Text>
                      <Navbar className="read" bg="dark" variant="dark">
                        <Navbar.Brand href={element.url}>
                          {" "}
                          Read More
                        </Navbar.Brand>
                      </Navbar>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse> */}
      </div>
    );
  }
}

export default withAuth0(News);
