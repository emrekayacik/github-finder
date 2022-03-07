import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a href="#" className="navbar-brand">
                    <i className={this.props.icon}></i> {this.props.title}
                </a>
            </nav>
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
