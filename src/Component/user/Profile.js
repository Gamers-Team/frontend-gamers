  
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {

 


  render() {
    const { user } = this.props.auth0;
    return (
        <>

        <div>Hello {user.name}</div>
        <div>Email: {user.email}</div>
        <img src={`${user.picture}`} alt="0" />
        
        </>
    )
    ;
  }
}

export default withAuth0(Profile);