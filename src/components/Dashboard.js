import React from "react";
import {Link, NavLink, Outlet} from 'react-router-dom';
function Dashboard(){
    return(
         <>
         <div className="container-fluid">
          <div className="row">
          <div className="col-lg-2 mt-3 ">
           <ul>
              <li className="nav-bar-link"><NavLink  to="/administration/dashboard"> Dashboard </NavLink> </li>
               
               <li className="nav-bar-link"><NavLink  to="/administration/productcategories" > Product Categories </NavLink> </li>
               <li className="nav-bar-link"><NavLink  to="/administration/products" > Products </NavLink> </li>
               <li className="nav-bar-link"><NavLink  to="/administration/orders"> Orders </NavLink> </li>
               <li className="nav-bar-link"><NavLink  to="/administration/failedorders"> Failed Orders </NavLink> </li>
               <li className="nav-bar-link"><NavLink  to="/" > Log Out </NavLink> </li>
                 </ul>

           </div>
           <div className="col-lg-10">
              
      <hr className='container-fluid'/>
        <div class="breadcrumbs">
			<p class="bread"><span><Link to="/administration">Admin</Link></span> / <span> Dashboard</span></p>
		</div>
		<div className="container">
			<h1 className='text-center bg-light'>Dashboard</h1>
			<div className="row">
				<div className="col-lg-6">
				<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Categories</h1>
    <p class="lead"></p>
  </div>
</div>
	</div>

	<div className="col-lg-6">
				
	<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Products</h1>
    <p class="lead"></p>
  </div>
</div>
	</div>
	</div>

	<div className="row">
	<div className="col-lg-6">
	<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Users</h1>
    <p class="lead"></p>
  </div>
</div>
	</div>
	
	<div className="col-lg-6">			
	<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Orders</h1>
    <p class="lead"></p>
  </div>
</div>

				</div>
			</div>

		</div>
        <Outlet/> 
      
      </div>
      </div> 
      </div>
      <div>


		</div>
        


         </>
    )
};

export default Dashboard;