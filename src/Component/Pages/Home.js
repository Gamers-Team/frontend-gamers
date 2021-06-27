import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, CardGroup, Button } from 'react-bootstrap';
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
            text:'Set in 2152, two years before the events of the film, Avatar: The Game starts out with a new signals specialist, named Able Ryder, arriving at Pandora, assigned to an area called Blue Lagoon, a large piece of jungle, fenced in to make sure no larger predators get inside.',
            heroimg: "https://media.rawg.io/media/games/f25/f2560e90d42949725b2edb771764e0f4.jpg"


        }
    }




    componentDidMount = async () => {
        let array = [
            { url: "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg", desc: 'The player can select from four difficulty levels: Walk on the Beach, Combat Op, Suicide Mission, and the hardest difficulty, FUBAR, which is only unlocked after completing the game on Suicide Mission.[1] Various new weapons and equipment become available as the game progresses, some dropped by downed enemies.' },
            { url: "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg", desc: 'Saints Row: The Third is an action-adventure game[2][3] played from the third-person perspective[4] in an open world,[3] such that players explore an unrestricted environment' },
            { url: "https://media.rawg.io/media/games/f25/f2560e90d42949725b2edb771764e0f4.jpg", desc: 'Set in 2152, two years before the events of the film, Avatar: The Game starts out with a new signals specialist, named Able Ryder, arriving at Pandora, assigned to an area called Blue Lagoon, a large piece of jungle, fenced in to make sure no larger predators get inside.' },
            { url: "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg", desc: 'Super Meat Boy is a platform game in which players control a small, dark red, cube-shaped character named Meat Boy, who must save his cube-shaped, heavily bandaged girlfriend Bandage Girl from the evil scientist Dr. Fetus' },
            { url: "https://media.rawg.io/media/games/0e9/0e9d75008321d640e4a14a8b5e322620.jpg", desc: ' The Sonic franchise is known for its large cast of characters;[187] Sonic the Fighters (1996) producer Yu Suzuki joked that anyone who makes a Sonic game has the duty to create new characters.[188] The first game introduced Sonic, a blue hedgehog who can run at incredible speeds, and Doctor Eggman, a rotund mad scientist.' }
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
    handleChange = (idx) => {
        let array = [
            { url: "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg", desc: 'The player can select from four difficulty levels: Walk on the Beach, Combat Op, Suicide Mission, and the hardest difficulty, FUBAR, which is only unlocked after completing the game on Suicide Mission.[1] Various new weapons and equipment become available as the game progresses, some dropped by downed enemies.' },
            { url: "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg", desc: 'Saints Row: The Third is an action-adventure game[2][3] played from the third-person perspective[4] in an open world,[3] such that players explore an unrestricted environment' },
            { url: "https://media.rawg.io/media/games/f25/f2560e90d42949725b2edb771764e0f4.jpg", desc: 'Set in 2152, two years before the events of the film, Avatar: The Game starts out with a new signals specialist, named Able Ryder, arriving at Pandora, assigned to an area called Blue Lagoon, a large piece of jungle, fenced in to make sure no larger predators get inside.' },
            { url: "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg", desc: 'Super Meat Boy is a platform game in which players control a small, dark red, cube-shaped character named Meat Boy, who must save his cube-shaped, heavily bandaged girlfriend Bandage Girl from the evil scientist Dr. Fetus' },
            { url: "https://media.rawg.io/media/games/0e9/0e9d75008321d640e4a14a8b5e322620.jpg", desc: ' The Sonic franchise is known for its large cast of characters;[187] Sonic the Fighters (1996) producer Yu Suzuki joked that anyone who makes a Sonic game has the duty to create new characters.[188] The first game introduced Sonic, a blue hedgehog who can run at incredible speeds, and Doctor Eggman, a rotund mad scientist.' }
        ]
    
        // console.log();
        this.setState({
            heroimg: array[idx].url,
            text:array[idx].desc,
        })
    }


    render() {
        return (
            <>
                {console.log(this.state.d)}
                <div className='heroBox'>


                    <div className='rightBar'>

                        {this.state.array.map((item,idx) => {

                            return (
                                <Card style={{ width: '100%' }} className='abd'  >
                                    <Card.Img variant="top" style={{ height: '5.5rem' }} src={item.url} onClick={() => this.handleChange(idx)}
                                    />

                                </Card>
                            )

                        })}
                    </div>


                    <div className='leftImage' >
                        <Card className='abd' style={{ width: '100%', }}>
                            <Card.Img variant="maina" className='imagemain' style={{ height: '28rem' }} src={this.state.heroimg} />
                            <Button className='butHome' variant="primary" style={{ width: '5rem', }} >Primary</Button>
                            <Card.Text className='textHome' style={{ width: '15rem', }}>
                                {this.state.text}
                            </Card.Text>
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

export default Home;