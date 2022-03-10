import React, { Component } from 'react'
import {Button, Link,Text, VStack,Box,Image,Flex,Badge,Center} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';

class User extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {name,avatar_url,login,html_url,followers,blog,id} = this.props.user;
        return (
            <React.Fragment>
                
                
                <Box
                borderStyle="none"
                className="col-md-4 col-sm-6 col-lg-3"
        cursor="pointer"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          transform: "scale(1.05)"
        }}
        _active={{
          transform: "scale(0.95)"
        }}
        p="5"
        maxW="320px"
        borderWidth="1px"
      >
        <Image width="500px" borderRadius="md" src={avatar_url} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{login}</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; {name}
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
            </React.Fragment>
        )
    }
}

export default User
