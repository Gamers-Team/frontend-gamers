import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

export class Store extends Component {
    render() {
        return (
            <div>
                Store
            </div>
        )
    }
}

export default withAuth0(Store)
