import React, { Component } from 'react'
import {Button, Link,Text, VStack} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';

class User extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {name,avatar_url,login,html_url,followers,blog,id} = this.props.user;
        return (
            <React.Fragment>
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className="img-fluid" />
                        <div className="card-body">
                            <VStack alignItems="center">
                            <Text fontSize='lg'
                                  isTruncated 
                                  >{login}</Text>
                            <Link style={{textDecoration: 'none'}} href={html_url} isExternal>
                                                                <Button colorScheme="teal"
                                                                            size="sm"
                                                                            variant='ghost'
                                                                            rightIcon={<ArrowForwardIcon />} 
                                                                            _active={{
                                                                                bg: '#dddfe2',
                                                                                transform: 'scale(0.98)',
                                                                                borderColor: '#bec3c9',
                                                                            }}
                                                                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                                                            >
                                                                                Go to Profile
                                                                </Button>
                            </Link>
                            </VStack>


                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default User
