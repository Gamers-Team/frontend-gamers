import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
export class News extends Component {
    render() {
        return (
            <div>
                News
            </div>
        )
    }
}

export default withAuth0(News)
