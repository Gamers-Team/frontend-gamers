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
            array: [],
            firstCard: {},
            secondCard: {},
            thirdCard: {},
            heroimg: "https://media.rawg.io/media/games/f25/f2560e90d42949725b2edb771764e0f4.jpg"


        }
    }




    componentDidMount = async () => {
        let array = [
            { url: "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg" },
            { url: "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg" },
            { url: "https://media.rawg.io/media/games/f25/f2560e90d42949725b2edb771764e0f4.jpg" },
            { url: "https://media.rawg.io/media/screenshots/b07/b07592c9fa757d99f3f56ae4626754dc.jpg" },
            { url: "https://media.rawg.io/media/games/0e9/0e9d75008321d640e4a14a8b5e322620.jpg" }
        ]

        // let server = process.env.React_APP_SERVER;
        let homeUrl = `https://api.rawg.io/api/games?key=995491d1a18f47709f7ba3b66bce85c1&page=2&page_size=40`;
        axios
            .get(homeUrl)
            .then((result => {
                let gamedata = result.data.results;



                let sortGame = gamedata.sort(function (a, b) {
                    return b.ratings_count - a.ratings_count;
                });

                this.setState({
                    game: gamedata,
                    array: array,
                    firstCard: sortGame[0],
                    secondCard: sortGame[1],
                    thirdCard: sortGame[2],

                })


            }))
            .catch((err) => {
                this.setState({ err: 'there is no games' })
            })
    }
    handleChange = (event) => {
        console.log(event)
        let hero = event.target.currentSrc
        this.setState({
            heroimg: hero
        })
    }


    render() {
        return (
            <>
                {/* {console.log(this.state.game)} */}
                <div className='heroBox'>


                    <div className='rightBar'>

                        {this.state.array.map((item) => {

                            return (
                                <Card style={{ width: '10rem' }} className='abd'  >
                                    <Card.Img variant="top" style={{ height: '5.5rem' }} src={item.url} onClick={this.handleChange}
                                    />

                                </Card>
                            )

                        })}
                    </div>


                    <div className='leftImage' >
                        <Card className='abd' style={{ width: '57.5rem', }}>
                            <Card.Img variant="maina" className='imagemain' style={{ height: '28rem' }} src={this.state.heroimg} />

                        </Card>
                    </div>

                </div>
                <div>
                    <Card className='trendingword'>
                        <Card.Body className='cardbodyyy'>Trending Games</Card.Body>
                    </Card>
                </div>
                <div className='trending'>

                    <CardGroup>
                        <Card  >
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.firstCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.firstCard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card className='middle'>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.secondCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.secondCard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card  >
                            <Card.Img variant="top" style={{ height: '12rem' }} src={this.state.thirdCard.background_image} />
                            <Card.Body>
                                <Card.Title>{this.state.thirdCard.name}</Card.Title>
                                {/* <Card.Text> 
                                </Card.Text> */}
                            </Card.Body>
                        </Card>


                    </CardGroup>




                </div>

            </>
        )
    }
}

export default Home
