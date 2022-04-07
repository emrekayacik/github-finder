import axios from 'axios';
import React, { Component } from 'react';
import Loading from './components/Loading';
import Users from './components/Users';
import Search from './components/Search';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isSearched: false,
      cleared: false
    }
  }
  
  searchUser = (keyword) =>{
    this.setState({
      isLoading: true
    });
    window.setTimeout(()=>{
      axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res => {
      this.setState(
        {
          users: res.data.items,
          isLoading: false,
          isSearched: true,
          cleared: false
        });
    });
    },500)
  }
   clearUsers = () => {
     this.setState({
      users: [],
      cleared: true
     });
   }
  
  render(){
    return (
      <React.Fragment>
        <Search 
        showClearButton={this.state.users.length > 0 ? true : false} 
        searchUser={this.searchUser}
        clearUsers={this.clearUsers} />
        {this.state.isLoading === true ? <Loading /> : 
        <Users 
        alert = {this.state.alert}
        cleared={this.state.cleared} 
        isSearched={this.state.isSearched} users={this.state.users} />}
      </React.Fragment>
    );
  }
}

export default App;
