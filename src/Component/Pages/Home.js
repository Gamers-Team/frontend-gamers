import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button, CardColumns } from 'react-bootstrap';



export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: [],
            err: " "

        }
    }

    componentDidMount = async () => {

        // let server = process.env.React_APP_SERVER;
        let homeUrl = `https://api.rawg.io/api/games?key=995491d1a18f47709f7ba3b66bce85c1`;
        axios
            .get(homeUrl)
            .then((result => {
                let gamedata = result.data.results;
                this.setState({
                    game: gamedata

                })

            }))
        // .catch((err) => {
        //     this.setState({ err: 'there is no games' })
        // })

    }
    render() {
        return (
            <>
                {console.log(this.state.game)}
                { for (let index = 0; index < array.length; index++) {
                 
                 return(

                    <div>
                    <h1>Home page</h1>
                    <div className='heroDiv'>
                        <div className='leftImage'>
                            <Card style={{ width: '35rem', height: '20rem' }}>
                                <Card.Img variant="top" src={item.background_image} />
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

                            </CardColumns></div>
                    </div>
                    <div className='trending'>

                    </div>

                </div>
                  )
                  }
                }
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
