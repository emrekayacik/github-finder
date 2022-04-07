import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from '../App';
import UserDetails from '../components/UserDetails'
import About from '../components/About';
import Navbar from "../components/Navbar";

class AppRouter extends Component{
    render(){
        return (
            <BrowserRouter>
               <Navbar title="Github Finder" icon="fa-solid fa-code-branch" />
               <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/users/:userId" element={<UserDetails />} />
                    <Route path="/About" element={<About />} />
                    <Route path="*" element={
                            <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                            </main>
                        }
                    />
                    </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRouter;