// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Landing from './components/LandingPage';
import UserProfile from './components/UserPofile';
import SideBar from './components/SideBar';
import UserPosts from './components/UserPosts';
import UserGallery from './components/UserGallery';
import UserToDo from './components/UserToDo';

export const config= {
  endpoint: `https://panorbit.in/api/users.json`,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/profile/:tid" element={<UserProfile/>}></Route>
        <Route exact path="/gallery/:tid" element={<UserGallery/>}> </Route>
        <Route exact path="/todo/:tid" element={<UserToDo/>}></Route>
        <Route exact path="/posts/:tid" element={<UserPosts/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
