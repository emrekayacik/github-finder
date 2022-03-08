import axios from 'axios';
import React, { Component } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar'
import Users from './components/Users';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoading: true
    }
  }
  
  componentDidMount(){
    window.setTimeout(()=>{
      axios
    .get('https://api.github.com/users')
    .then(res => {
      this.setState(
        {
          users: res.data,
          isLoading: false
        });
    });
    },500)
  }
   
  
  render(){
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="fa-solid fa-code-branch" />
        {this.state.isLoading === true ? <Loading /> : <Users users={this.state.users} />}
      </React.Fragment>
    );
  }
}

export default App;
