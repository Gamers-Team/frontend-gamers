import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo_3.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Aboutus extends Component {
    render() {
        return (
            <div>
                <Image className='image' src="https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" fluid />
                <img className="logo" src={logo} />

                <Container className='cont'>

                    {/* <h2>Space Games</h2> */}
                    <h3>What is Space Games all about?</h3>
                    <h5>Access the best giveaways in gaming</h5>
                    <h5>from free games</h5>
                    <h5>to newly updated games news</h5>
                    <h5>to top trendy games and lot more</h5>
                    {/* <Navbar>

                        <Navbar.Brand className='nav' href='/'> Discover Now!</Navbar.Brand>

                    </Navbar> */}
                    <Button className='discover' variant="danger" href='/'>Discover Now!</Button>

                </Container>
                <Container className='cont2'>
                    <h3>Who we Are?</h3>
                    <h5>We are a group of passionate developers</h5>
                    <h5>and tech enthusiasts</h5>
                    <h5>collaborated together to</h5>
                    <h5>build this gaming lovers website</h5>
                </Container>


                <Container className='cont3'>
                    <Row xs={1} md={5} className="g-4">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="http://demos.subinsb.com/isl-profile-pic/image/person.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        info
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="http://demos.subinsb.com/isl-profile-pic/image/person.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        info
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="http://demos.subinsb.com/isl-profile-pic/image/person.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        info
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="http://demos.subinsb.com/isl-profile-pic/image/person.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        info
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="http://demos.subinsb.com/isl-profile-pic/image/person.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        info
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </div>
        )
    }
}

export default Aboutus
