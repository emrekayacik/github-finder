import axios from 'axios';
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import User from './components/User'
import Users from './components/Users';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }
  
  componentDidMount(){
    axios
    .get('https://api.github.com/users')
    .then(res => {
      this.setState({users: res.data});
      console.log(this.state.users);
    });
  }
   
  
  render(){
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="fa-solid fa-code-branch" />
        <Users users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App;
