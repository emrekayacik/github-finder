import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        {
                        this.props.users.map((user) => {
                            return <User key={user.id} user={user} />
                        })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Users
