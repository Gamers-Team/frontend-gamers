import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Form from 'react-bootstrap/Form';
import axios from 'axios';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultData: [],
            error: false,
            errorMessage: '',
            platform: '3d games',
        }
    }
    changingPlatform = async (choice) => {

        const url = `https://gnews.io/api/v4/top-headlines?q=${choice}&token=c4cb129e3105914ea26807a3ddde1fd8&lang=en&topic=entertainment&max=10`;
        try {
            const news = await axios.get(url);
            console.log(news.data.articles);
            this.setState({
                defaultData: news.data.articles,
                platform: choice,
            })
            console.log(this.state.defaultData);
        }
        catch (err) {
            this.setState({
                errorMessage: err,
                error: true,
            })

        }
        // this.setState({
        //     platform: choice,
        // })
        // console.log(choice);
        // this.componentDidMount();
    }
    // test = (test) => {
    //     console.log(test);
    // }
    componentDidMount = async () => {
        console.log(this.state.platform);

        const url = `https://gnews.io/api/v4/top-headlines?q=${this.state.platform}&token=c4cb129e3105914ea26807a3ddde1fd8&lang=en&topic=entertainment&max=10`;
        try {
            const news = await axios.get(url);
            console.log(news.data.articles);
            this.setState({
                defaultData: news.data.articles,
            })
            console.log(this.state.defaultData);
        }
        catch (err) {
            this.setState({
                errorMessage: err,
                error: true,
            })

        }
    }
    render() {
        return (
            <div>
                <Carousel className='car' fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.destructoid.com/wp-content/uploads/2021/06/Shadowrun-Dragonfall-artwork.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.destructoid.com/wp-content/uploads/2021/06/witchercon-new-game-reveal-1536x977.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.destructoid.com/wp-content/uploads/2021/06/Shadowrun-Dragonfall-artwork.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Navbar className="navBar" variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand >Search the latest Games News </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Browse by platform"
                                    menuvariant="dark"

                                >
                                    <NavDropdown.Item className='drop' onClick={() => this.changingPlatform('xbox')}>Xbox one</NavDropdown.Item>
                                    <NavDropdown.Item onSelect={() => this.changingPlatform('pc')}>PC</NavDropdown.Item>
                                    <NavDropdown.Item onSelect={() => this.changingPlatform('3ds')}>3Ds</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    {/* <NavDropdown.Item >Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Row xs={1} md={2} className="g-4">
                    {this.state.defaultData.map(element => {
                        return <Col>
                            <Card>
                                <Card.Img variant="top" src={element.image} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        {element.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {element.publishedAt}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
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
        )
    }
}

export default withAuth0(News)
