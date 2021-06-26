import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';
import "./Home.css";



export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: [],
            err: " ",
            first: {},
            second: {},
            third: {},
            forth: {},
            firstCard: {},
            secondCard: {},
            thirdCard: {},
            forthCard: {},

            highestNum: [],


        }
    }

    componentDidMount = async () => {

        // let server = process.env.React_APP_SERVER;
        let homeUrl = `https://api.rawg.io/api/games?key=995491d1a18f47709f7ba3b66bce85c1`;
        axios
            .get(homeUrl)
            .then((result => {
                let gamedata = result.data.results;

                let a = [Math.floor(Math.random() * 20)];
                let b = [Math.floor(Math.random() * 20)];
                let c = [Math.floor(Math.random() * 20)];
                let d = [Math.floor(Math.random() * 20)];
                // while (a === b || a === c || a === d || b === c || b === d || c === d) {
                //     b = [Math.floor(Math.random() * 20)];
                //     c = [Math.floor(Math.random() * 20)];
                //     d = [Math.floor(Math.random() * 20)];
                // }
                let sortGame = gamedata.sort(function (a, b) {
                    return b.ratings_count - a.ratings_count;
                });

                this.setState({
                    game: gamedata,
                    first: gamedata[a],
                    second: gamedata[b],
                    third: gamedata[c],
                    forth: gamedata[d],

                    firstCard: sortGame[0],
                    secondCard: sortGame[1],
                    thirdCard: sortGame[2],
                    forthCard: sortGame[3],

                })


            }))
            .catch((err) => {
                this.setState({ err: 'there is no games' })
            })
    }

    render() {
        return (
            <>



                <div className='heroBox'>
                    <div className='rightBar'> {console.log(this.state.game)}

                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src={this.state.first.background_image} />

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src={this.state.second.background_image} />

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src={this.state.third.background_image} />

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src={this.state.forth.background_image} />

                        </Card>
                    </div>
                    <div className='leftImage'>
                        <Card style={{ width: '50rem' }}>
                            <Card.Img variant="maina" style={{ height: '25rem' }} src={this.state.forth.background_image} />

                        </Card>
                    </div>

                </div>

                <div>

                    <CardGroup>
                        <Card>
                            <Card.Img variant="top"  style={{ height: '12rem' }} src={this.state.firstCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.firstCard.name}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.secondCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.secondCard.name}</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top"  style={{ height: '12rem' }} src={this.state.thirdCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.thirdCard.name}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top"  style={{ height: '12rem' }} src={this.state.forthCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.forthCard.name}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>




                </div>

            </>
        )
    }
}

export default Home
