import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {Box,Text,Button} from '@chakra-ui/react';


export default function UserDetails(props){
    const [user,setUser] = useState({login: ""});
    let params = useParams();

    
    // TODO: STYLE AND SHOWING USER DETAILS
        return <>
        <Box
        className="container mt-3">
            <Button onClick={()=> setUser({login:params.userId})}>Get Login Name</Button>
            <Text>isim: {user.login}</Text> 
        </Box>
        
        </>
}