import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: [],
            err:" "

        }
    }

    componentDidMount() {
        this.gitinggame()
    }
    // `https://www.gamerpower.com/api/giveaways`
    gitinggame = async () => {
        let server = process.env.React_APP_SERVER;
        let homeUrl = `${server}/Home`;
     

        axios
        .get(homeUrl)
        .then((data=>{
            this.setState({data:data.data})
        }))
        .catch((err)=>{
            this.setState({err:there is no games})
        }) 
               console.log(this.state.data);

    }
    render() {
        return (
            <>
                {this.state.gameData.map((item) => {
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
