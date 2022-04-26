import axios from 'axios';
import React, { Component } from 'react';
import Loading from './components/Loading';
import Users from './components/Users';
import Search from './components/Search';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserDetails from './components/UserDetails'
import About from './components/About';
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      user: {},
      repos: [],
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
  getUserDetail = (login) => {
    this.setState({
      isLoading: true
    });
    window.setTimeout(()=>{
      axios
    .get(`https://api.github.com/users/${login}`)
    .then(res => {
      this.setState(
        {
          user: res.data,
          isLoading: false,
        });
    });
    },500)
  }
  getUserRepos = (login) => {
    this.setState({
      isLoading: true
    });
    window.setTimeout(()=>{
      axios
    .get(`https://api.github.com/users/${login}/repos`)
    .then(res => {
      this.setState(
        {
          repos: res.data,
          isLoading: false,
        });
    });
    },500)
  }
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
               <Navbar title="Github Finder" icon="fa-solid fa-code-branch" />
               <Routes>
                    <Route path="/" element={<>
                      <Search 
                      showClearButton={this.state.users.length > 0 ? true : false} 
                      searchUser={this.searchUser}
                      clearUsers={this.clearUsers} />
                      {this.state.isLoading === true ? <Loading /> : 
                      <Users 
                      alert = {this.state.alert}
                      cleared={this.state.cleared} 
                      isSearched={this.state.isSearched} users={this.state.users} />}
                    </>} />
                    <Route path="/users/:login" element={<UserDetails repos={this.state.repos} getUserRepos={this.getUserRepos} user={this.state.user} getUserDetail={this.getUserDetail} />} />
                    <Route path="/About" element={<About />} />
                    <Route path="*" element={
                            <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                            </main>
                        }
                    />
                    </Routes>
            </BrowserRouter>
            
      </React.Fragment>
    );
  }
}

export default App;
