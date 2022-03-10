import React, { Component } from 'react'
import {Box,Button,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Link} from '@chakra-ui/react';

class Navbar extends Component {
    render() {
        return (
            <Box className="navbar navbar-dark bg-primary">
                <Link style={{textDecoration: 'none'}} href="#" className="navbar-brand">
                    <i className={this.props.icon}></i> {this.props.title}
                </Link>
                <Menu>
                    <MenuButton as={Button} colorScheme='pink'>
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Profile'>
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='Help'>
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Box>
        )
    }
}
Navbar.defaultProps = {
    title: 'DefaultGithubTitle', // if title parameter not sent
    icon: 'fa-brands fa-github'
};
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   };
export default Navbar
