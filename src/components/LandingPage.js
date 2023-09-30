import React,{useState,useEffect} from "react";
import axios from "axios";
import './LandingPage.css'
import { Link } from "react-router-dom";

const Landing=()=>{
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const usersList=await axios.get("https://panorbit.in/api/users.json");
        setUsers(usersList.data.users);
    }
    return (
       <div className="landing"> 
       <div className="user-list-container">
        <p className="header-container">Select an Account</p>
        {Array.isArray(users) ? users.map((user,index)=>(
            <><div key={index} className="user-card">
                <Link className='user-link' to={`/profile/${user['id']}`}>
                <img className="profile-picture" src={user['profilepicture']} />
                <p className="text">{user['name']}</p>
                </Link>
                
            </div><hr className="hline"></hr></>
        )):''}
        </div>
        </div>
    )
}
export default Landing;