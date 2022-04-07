import React, { Component } from 'react'
import User from './User'
import {Box} from '@chakra-ui/react'
import UserAlert from './UserAlert';
import {Link} from 'react-router-dom';
class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <Box className="container mt-3">
                    <Box className="row">
                        {
                            this.props.users.length <= 0 && this.props.isSearched && !this.props.cleared ? <UserAlert alertText='No Users Found' /> : this.props.users.map((user) => {
                                return <Link 
                                style={{ textDecoration: "none" }}
                                to={`/users/${user.login}`}
                                key={user.id}>
                                    <User key={user.id} user={user} />
                                </Link>
                            })
                        
                        }
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

export default Users
