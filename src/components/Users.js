import React, { Component } from 'react'
import User from './User'
import {Box,Alert,AlertIcon,AlertTitle} from '@chakra-ui/react'
import UserAlert from './UserAlert'
class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <Box className="container mt-3">
                    <Box className="row">
                        {
                            this.props.users.length <= 0 && this.props.isSearched && !this.props.cleared ? <UserAlert alertText='No Users Found' /> : this.props.users.map((user) => {
                                return <User key={user.id} user={user} />
                            })
                        
                        }
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

export default Users
