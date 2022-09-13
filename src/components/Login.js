import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Environment';
import { baseurl } from './Environment';

const Login = () => {
    
    // let navigate = useNavigate();

    let[data, setData] = useState({
      username:"",
      password:""
    });

    function handle(e){
      e.preventDefault();
      let newData = {...data};
      newData[e.target.id] = e.target.value;
      setData(newData);
    };

    function submit(e){
        e.preventDefault();
       axios.post(baseurl + "admin/login", {data:data}).then((res)=>{
        if(res.data.data.status === "success")
        {
         localStorage.setItem("usertype", "admin");
        //  navigate("/administration");
        window.location.href = "/administration";
            
        }
        else{
            alert("invalid credientials");
        }
       }, (err)=>{
        console.log("Exception: " + err);
       })
    }
    return(
        <>
        
        <div className="wrapper fadeInDown">
        <div id="formContent">
        
            <input type="text" onChange={(e)=>{handle(e)}}
                value={data.username} id="username" className="fadeIn second mt-5" for="password" placeholder="username" />
            
            <input type="text" onChange={(e)=>{handle(e)}}
                value={data.password} id="password" className="fadeIn third" for="password" placeholder="password"/>
            
            <input type="button" onClick={(e)=>{submit(e)}} className="fadeIn fourth" value="Log In"/>            
           
        </div>
    </div>
        </>
        
    )
}

export default Login;