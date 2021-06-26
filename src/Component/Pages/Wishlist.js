import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {Card,Button} from 'react-bootstrap'



export class Wishlist extends Component {

    constructor(props){
        super(props)
        this.state={
            wishListData:{},
        }
    }

    getFavarite=()=>{
       
        let email=this.props.auth0.user.email;
        let url=`http://localhost:3001/wishlist?email=${email}`
        axios.get(url).then((result)=>{
            // console.log(result.data[0].name);
            this.setState({
                wishListData:result.data,
            })

        })

    }


    deletegame=(idx)=>{
        console.log(idx);
    }

    render() {

    const { isAuthenticated } = this.props.auth0;

        return (

            <div>
               {isAuthenticated && this.getFavarite()}
               {this.state.wishListData.map((item,idx) => {
                  return (
           
                <Card className="text-center" key={idx}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  {item.description}
                  </Card.Text>
                  <Button variant="primary"  onClick={()=>this.deletegame(idx)}>Delete</Button>
                
                </Card.Body>
                <Card.Footer className="text-muted">{item.status}</Card.Footer>
              </Card>

             );
        })}
            </div>
        )
    }
}

export default withAuth0(Wishlist)
