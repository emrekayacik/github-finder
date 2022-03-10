import React, { Component } from 'react'
import {Alert,AlertIcon,AlertTitle} from '@chakra-ui/react'

export class UserAlert extends Component {
    render() {
        return (
            <Alert alignItems='center' justifyContent='center' borderRadius='full' status='warning'>
                            <AlertIcon />
                            <AlertTitle>{this.props.alertText}</AlertTitle>
            </Alert>
        )
    }
}

export default UserAlert
