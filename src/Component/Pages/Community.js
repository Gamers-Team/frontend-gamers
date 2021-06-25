import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

export class Community extends Component {
    render() {
        return (
            <div>
                Component
            </div>
        )
    }
}

export default withAuth0(Community);
