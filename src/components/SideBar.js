
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import { Link,useParams } from "react-router-dom";

const SideBar = () => {
  const {tid}=useParams();
  
  return (
    <div className="sidebar">  
    <NavLink to={`/profile/${tid}`} activeClassName="active">Profile</NavLink>
    <NavLink to={`/gallery/${tid}`} activeClassName="active">Gallery</NavLink>
    <NavLink to={`/todo/${tid}`} activeClassName="active">Todo</NavLink>
    <NavLink to={`/posts/${tid}`} activeClassName="active">Posts</NavLink>
  </div>
  );
};

export default SideBar;

