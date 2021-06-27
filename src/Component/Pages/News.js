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

        const url = `https://newsapi.org/v2/everything?domains=gameinformer.com,destructoid.com&q=${choice}&sortBy=popularity&apiKey=3c9471ccb160424d9d34f0326977cc88`;
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

        const url = `https://newsapi.org/v2/everything?domains=gameinformer.com,destructoid.com&q=games%20And%20gaming&sortBy=popularity&apiKey=3c9471ccb160424d9d34f0326977cc88`;
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
                            <h3>Shadowrun Trilogy is free to claim during the GOG Summer Sale</h3>
                            <p>Just as one summer sale starts, another is coming to a close. As the GOG Summer Sale winds down, you may want to take a look at these deals even if you have no intention of spending — there’s a 72-hour Shadowrun Trilogy freebie just for showing up.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.destructoid.com/wp-content/uploads/2021/06/witchercon-new-game-reveal-1536x977.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>CDPR confirms no new Witcher game to be revealed at WitcherCon</h3>
                            <p>As you may have read, CD Projekt RED is teaming up with Neflix in order to present a special live stream next month, entirely based around the fantasy franchise, The Witcher.</p>
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
                            <p>Magic: The Gathering‘s Dungeons and Dragons set is so thematic that the lands have flavor text. That was my main takeaway from attending an advanced preview event of the next set, which is ready to debut in both Magic: Arena and paper Magic next month. Wizards put an extraordinary amount of effort into this one.</p>
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
                                    menuVariant="dark"

                                >
                                    <NavDropdown.Item bg="dark" variant="dark" className='drop' onClick={() => this.changingPlatform('xbox')}>Xbox one</NavDropdown.Item>
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
                                <Card.Img variant="top" src={element.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        {element.description}
                                    </Card.Text>
                                    <Card.Text>
                                        The Publish date is :{element.publishedAt}
                                    </Card.Text>
                                    <Card.Text>

                                        <Navbar bg="dark" variant="dark">
                                            <Container>
                                                <Navbar.Brand href={element.author}> Read More</Navbar.Brand>
                                            </Container>
                                        </Navbar>


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
