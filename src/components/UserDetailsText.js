import {VStack,Heading,SimpleGrid, GridItem,Text,Link,Badge} from '@chakra-ui/react';

const UserDetailsText = (props) => {
    return(
        <>
        <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
            <VStack spacing={3} alignItems='flex-start'>
                <Heading size='2xl'>{props.user.name}</Heading>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
                <GridItem colSpan={1}>
                <Text >{props.user.name}</Text>  
                </GridItem>
                <GridItem colSpan={1}>
                     <Link target='_blank' href={props.user.html_url} >{props.user.login}</Link>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text>Created at: {props.user.created_at}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Badge bg='papayawhip'>Followers: {props.user.followers}</Badge>
                </GridItem>
                <GridItem colSpan={1}>
                    <Badge bg='papayawhip' >Following: {props.user.following}</Badge>
                </GridItem>
            </SimpleGrid>
        </VStack>
        </>
    );
}

export default UserDetailsText;