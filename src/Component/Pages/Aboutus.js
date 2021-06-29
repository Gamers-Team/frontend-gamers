import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo_3.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from '../assets/violet-among-us-3218514-2691062.png';
import Carousel from 'react-bootstrap/Carousel';
// import './aboutus.css';
import news from "../assets/newspaper.png";
import game from "../assets/game-controller.png";
import newslast from "../assets/newslast.png"


export class Aboutus extends Component {
    render() {
        return (
            <div>
                <Image className='image' src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" fluid />
                {/* <img className="logo" src={logo} /> */}
                {/* <Image className='image' src="https://images.unsplash.com/photo-1594652634010-275456c808d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" fluid /> */}
                <div className="headline">
                    <h2>Meet Our Team Members</h2>
                </div>

                <Container className='cont'>
                    <img src='https://www.gurnee.il.us/images/default-source/icons/icon_data.png?sfvrsn=bb5676b1_0' />
                    {/* <h2>Space Games</h2> */}
                    <h5>What is Space Games all about?</h5>
                    <p>Access the best giveaways in gaming
                        from free games
                        to newly updated games news
                        to top trendy games and lot more</p>
                    {/* <Navbar>

                        <Navbar.Brand className='nav' href='/'> Discover Now!</Navbar.Brand>

                    </Navbar> */}
                    {/* <Button className='discover' variant="danger" href='/'>Discover Now!</Button> */}

                </Container>
                <Container className='cont2'>
                    <img src="https://icon-library.com/images/about-us-icon/about-us-icon-15.jpg" />
                    <h5>Who we Are?</h5>
                    <p>We are a group of passionate developers
                        and tech enthusiasts
                        collaborated together to
                        build this gaming lovers website</p>

                </Container>
                <Container className='cont4'>
                    <img src="https://www.freepnglogos.com/uploads/email-png/email-messages-icon-16.png" />
                    <h5>Contact Us</h5>
                    <p>For any questions or suggestions please don't hesitate to contact us</p>
                    <Button href={'mailto:hmbalasmeh@yahoo.com'} variant="secondary" size="sm">
                        Contact
                    </Button>

                </Container>
                <h2> Team Members</h2>
                <div className="slidediv">

                    <Carousel className='slide'>
                        <Carousel.Item className='oneitem'>
                            <img

                                src="https://ca.slack-edge.com/TNGRRLUMA-U01SMM4H0AC-4c32b771444c-512"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Anas AbuGhaliha</h3>
                                <p>Team Leader</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src={icon1}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Haya Balasmeh</h3>
                                <p>Team Member</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="https://avatars.githubusercontent.com/u/81154074?v=4"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Maram Mustafa</h3>
                                <p>Team Member</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="https://avatars.githubusercontent.com/u/81154281?v=4"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Abdelmajeed Abed</h3>
                                <p>Team Member</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="https://avatars.githubusercontent.com/u/81149478?v=4"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Mohammad Hyajneh</h3>
                                <p>Team Member</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h2> APIs Used</h2>
                <div className="api">
                    <Container className='cont2'>
                        <a href="https://newsapi.org/">
                            <img src={news} />
                        </a>






                    </Container>
                    <Container className='cont2'>
                        <a href="https://www.gamerpower.com/api-read">
                            <img src={game} />
                        </a>



                    </Container>
                    <Container className='cont5'>

                        <a href="https://gnews.io/">
                            <img src={newslast} />
                        </a>

                    </Container>
                </div>



                {/* <Container className='cont3'>
                    <Row xs={1} md={2} className="g-3">

                        <Col>
                            <Card className="stylingCard">
                                <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U01SMM4H0AC-4c32b771444c-512" />

                                <Card.Body className="cardBodyStyle">
                                    <Card.Title>Anas AbuGhaliha</Card.Title>
                                    <Card.Text>
                                        <Button href={'https://github.com/AnasAGc'} variant="secondary" size="sm">
                                            Contact
                                        </Button>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col className='column'>
                            <Card className="stylingCard">
                                <Card.Img variant="top" src="http://demos.subinsb.com/isl-profile-pic/image/person.png" />
                                <Card.Body>
                                    <Card.Title>Haya Balasmeh</Card.Title>
                                    <Card.Text>

                                        <Button href={'https://github.com/abdu-zeyad'} variant="secondary" size="sm">
                                            Contact
                                        </Button>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> */}
                {/* <Col>
                            <Card className="stylingCard">
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81154074?v=4" />
                                <Card.Body>
                                    <Card.Title>Maram Mustafa</Card.Title>
                                    <Card.Text>
                                        <Button href={'https://github.com/maram-mustafa'} variant="secondary" size="sm">
                                            Contact
                                        </Button>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="stylingCard">
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81154281?v=4" />
                                <Card.Body>
                                    <Card.Title>Abelmajeed Alabedalraheem</Card.Title>
                                    <Card.Text>
                                        <Button href={'https://github.com/abdu-zeyad'} variant="secondary" size="sm">
                                            Contact
                                        </Button>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="stylingCard">
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81149478?v=4" />
                                <Card.Body>
                                    <Card.Title>Mohammad Hayajneh</Card.Title>
                                    <Card.Text>
                                        <Button href={'https://github.com/mohammadhayajneh2014'} variant="secondary" size="sm">
                                            Contact
                                        </Button>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container> */}

            </div >
        )
    }
}

export default Aboutus
