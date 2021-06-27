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
            image :'',


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
    change=(event)=>{
        event.preventDefault();
        console.log(event);
        this.setState({
           image:"https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
        })
    }

    render() {
        return (
            <>



                <div className='heroBox'>
                    <div className='rightBar'> {console.log(this.state.game)}

                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src="https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg" onclick={this.change}/>

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src="https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg" onclick={this.change}/>

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src="https://media.rawg.io/media/games/f25/f2560e90d42949725b2edb771764e0f4.jpg" onclick={this.change}/>

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src="https://media.rawg.io/media/screenshots/b07/b07592c9fa757d99f3f56ae4626754dc.jpg" onclick={this.change}/>

                        </Card>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ height: '6rem' }} src="https://media.rawg.io/media/games/0e9/0e9d75008321d640e4a14a8b5e322620.jpg" onclick={this.change}/>

                        </Card>
                    </div>
                    <div className='leftImage'>
                        <Card style={{ width: '50rem' }}>
                            <Card.Img variant="maina" style={{ height: '25rem' }} src="" />

                        </Card>
                    </div>

                </div>

                <div>

                    <CardGroup>
                        <Card style={{margin: '25px' }} >
                            <Card.Img variant="top"  style={{ height: '12rem' }} src={this.state.first.background_image} />
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
                        <Card style={{margin: '25px' }} >
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.second.background_image} />
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
                        <Card style={{margin: '25px' }} >
                            <Card.Img variant="top"  style={{ height: '12rem' }} src={this.state.third.background_image} />
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
                        {/* <Card>
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
                        </Card> */}
                    </CardGroup>




                </div>

            </>
        )
    }
}

export default Home
