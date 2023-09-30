import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import SideBar from "./SideBar";
import './UserGallery.css'

const UserPofile=()=>{
    const {tid}=useParams();
    const [user,setUser]=useState([]);
    const loadUser=async()=>{
        const usersList=await axios.get("https://panorbit.in/api/users.json");
        setUser(usersList.data.users.find(item => {return item.id == tid}));
    }
    useEffect(()=>{ 
        loadUser();
    },[tid]);

return(
    <>
    <SideBar id={tid}/>
    <div className="header">
        <div className="heading">Profile</div>
        <div className="user">
            <img className="profile-picture" src={user['profilepicture']}/>
            <p className="text">{user['name']}</p>
        </div>
    </div>
    <hr/>
    <div className="banner">Comming Soon</div>
    </>
)
}

export default UserPofile;