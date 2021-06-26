import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: '',

        }
    }

    // `https://www.gamerpower.com/api/giveaways`
    gitinggame = async (event) => {
        event.preventDefault();
        try {
            let homeUrl = 'https://www.gamerpower.com/api/giveaways';
            let gamesCome = await axios.get(homeUrl)
            this.setState({
                gameData: gamesCome.data,


            })

        }
        catch {

            this.setState({
                messageForWrongInput: 'error this is a bad response',
            })
        }

    }
    render() {
        return (
            <>
                {this.props.gameData.map((item) => {
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.thumbnail}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>


                        </div>
                    )
                })
                }
            </>
        )
    }
}

export default Home
