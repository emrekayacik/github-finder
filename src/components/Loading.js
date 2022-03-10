import React, { Component } from 'react';
import {Image,Center} from '@chakra-ui/react';
import loading from './200.gif'

class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <Center>
                    <Image src={loading} alt='loading...'  />
                </Center>    
            </React.Fragment>
        )
    }
}

export default Loading
