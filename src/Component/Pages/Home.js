import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
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
            highestNum: [],
            x: []

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
                let x = gamedata.sort(function (a, b) {
                    return b.ratings_count - a.ratings_count;
                });

                this.setState({
                    game: gamedata,
                    first: gamedata[a],
                    second: gamedata[b],
                    third: gamedata[c],
                    forth: gamedata[d],
                    x: x,

                })


            }))
            .catch((err) => {
                this.setState({ err: 'there is no games' })
            })


    }





    render() {
        return (
            <>
                {console.log(this.x)}


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
                    {this.state.game.map((item) => {
                        return (
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.background_image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {/* {item.thumbnail} */}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                    }
                </div>

            </>
        )
    }
}

export default Home
