import React,{Component} from "react";
import {Container, Flex, VStack, Image} from '@chakra-ui/react';
import UserDetailsText from "./UserDetailsText";
import Repos from './Repos'

export default class UserDetails extends Component{

    componentDidMount(){
        const login = window.location.pathname.split('/')[2];
        this.props.getUserDetail(login);
        this.props.getUserRepos(login);
    }
    render(){
        return (
        <>
        <Container maxW='container.xl' p={0}>
            <Flex h='100vh' py={20}>
                <VStack w='full' h='full' p={5} spacing={10} alignItems='flex-start'>
                    <Image  w='75%' borderRadius="md" src={this.props.user.avatar_url} 
                    _hover={{
                    transform: "scale(1.05)"
                    
                }} 
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                />
                </VStack>
                <VStack w='full' h='full' p={0} spacing={10} alignItems='flex-start'>
                    <UserDetailsText user={this.props.user} />
                    {this.props.repos.map(item=>(
                        <Repos key={item.id} repo={item} href={item.html_url} />
                    ))}
                </VStack>
            </Flex>
        </Container>
        </>);
    }   
}