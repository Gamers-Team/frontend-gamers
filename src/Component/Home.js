import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns, Card } from "react-bootstrap";
import "./Home.css";

export class Test extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <div className='heroDiv'>
                    <div className='leftImage'>
                        <Card style={{ width: '35rem', height: '20rem' }}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='rightColumn' style={{ width: '10rem', height: '20rem' }}>
                        <CardColumns>
                            <Card className='cardcss' >
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>1 </Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='cardcss'>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>2 </Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='cardcss'>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>3</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='cardcss'>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>4 </Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card >
                            <Card className='cardcss'>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>5 </Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </CardColumns></div>
                </div>
                <div className='trending'>



                </div>

            </div>
        )
    }
}

export default Test
