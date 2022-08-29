import React, { useEffect } from 'react'
import {Link, NavLink, Outlet, useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router';

function Administration(){

  if(localStorage.getItem("usertype")== null)
  window.location.href = "/";
  else if(localStorage.getItem("usertype") !== "admin")
  window.location.href = "/";
    // let navigate = useNavigate();

    function logout(e){
      e.preventDefault();
      localStorage.clear();
      // navigate("/");
      window.location.href = "/";
     
    }


  let NavStyle = ({isActive}) =>{
		return{
			
			color: isActive ? ' #88c8bc ' : '',
			position: isActive ? 'relative' : ''
			
			
	}
  
	}

    return(
        <>
          <div className="container-fluid">
          <div className="row">
          <div className="col-lg-2 mt-3 "></div>
           <ul>
              <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/dashboard"> Dashboard </NavLink> </li>
               
               <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/categories" > Product Categories </NavLink> </li>
               <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/Products" > Products </NavLink> </li>
               <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/orders"> Orders </NavLink> </li>
               <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/failedorders"> Failed Orders </NavLink> </li>
               <li className="nav-bar-link"><button onClick={(e)=>{logout(e)}}>Logout</button></li>
                 </ul>
                 <div className="col-lg-10">
                
                <Outlet />
                </div>
                </div>
                </div>
                
                

          
      </>
  
    )
};

export default Administration;