import React, { Component } from 'react'
import { Button , Card } from 'react-bootstrap';

export class Aboutus extends Component {
    render() {
        return (
            <div>
                <h2>about us page</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="photo/Mohammad photo.jpg" />
                    <Card.Body>
                        <Card.Title>MOHAMMADHAYAJNEH</Card.Title>
                        <Card.Text>
                        i'am graduated from yarmuk  universite wiht paclor degree in electrical engenering im here becuse i'm sheft my carer to be asoftware devloper.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Aboutus
