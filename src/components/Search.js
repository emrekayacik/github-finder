import React, { Component } from 'react';
import {HStack,FormControl,Input, Button, Center,Box, InputLeftAddon,Image, VStack} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import loading from './200.gif'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: '',
            searching: false
        }
    }
    searchOnChange = (e) => {
        this.setState({keyword: e.target.value})
    }
    searchOnSubmit = (e) => {
        this.setState({
            keyword: ''
        });
        if(this.state.keyword.trim() !== ''){
            this.setState({
                searching: true
            });
            this.props.searchUser(this.state.keyword)
        }
        setTimeout(() => {
            this.setState({
                searching: false,
            });

        }, 600);
        e.preventDefault();
    }
    clearUsers= () => {
        this.props.clearUsers();
    }
    render() {
        return (
            
                    <form>
                        <VStack w='full' h='full'  spacing={2}>
                        <Center w='full'>
                            <Box  w='50%'>
                                <FormControl marginTop={3}>
                                    <HStack spacing="0" >
                                        
                                            {this.state.searching === false ? <div>
                                                <InputLeftAddon marginRight={2} children={<SearchIcon color='gray.300' />} />
                                                
                                            </div> : <InputLeftAddon marginRight={2} children={<Image h='40px' w='40px' src={loading} />} />}
                                            <Input      value={this.state.keyword}
                                                        onChange={this.searchOnChange} 
                                                        _focus={{
                                                            borderBottom: '2px solid blue' 
                                                        }}
                                                        transition="all 0.1s ease-in"
                                                        placeholder="Search..." id='search' type='text' />
                                                
                                            
                                        
                                        <Button onClick={this.searchOnSubmit} colorScheme="blue" type="submit">Search</Button>
                                    </HStack>
                                </FormControl>
                            </Box>
                        </Center>
                        {
                                                this.props.showClearButton
                                            && 
                                                <Center>
                                                    <Button onClick={this.clearUsers} 
                                                        colorScheme="gray">Clear Users
                                                    </Button>
                                                </Center>
                        }
                        </VStack>
                    </form>
        )
    }
}

export default Search
