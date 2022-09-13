import React, { useEffect, useState, useNavigate } from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';



const Categories = () => {
  let [datas, setData] = useState([]);

  function load() {
    axios.post("http://localhost:8081/productcategory/list").then((res) => {
      setData(res.data.data);
    })
  }


  useEffect(() => {
    load();
  }, [])
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? '#88c8bc' : '',
      position: isActive ? 'relative' : '',
    }
  }

  function deletecategory(e, id) {
    e.preventDefault();
    axios.post("http://localhost:8081/productcategory/delete", { data: { id: id } }).then((res) => {
      alert("Are you sure want to delete")
      load();

    })
  }
  

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 mt-3 ">
            <ul>
              <li className="nav-bar-link"><NavLink to="/administration/dashboard"> Dashboard </NavLink> </li>

              <li className="nav-bar-link"><NavLink to="/administration/productcategories" > Product Categories </NavLink> </li>
              <li className="nav-bar-link"><NavLink to="/administration/products" > Products </NavLink> </li>
              <li className="nav-bar-link"><NavLink to="/administration/orders"> Orders </NavLink> </li>
              <li className="nav-bar-link"><NavLink to="/administration/failedorders"> Failed Orders </NavLink> </li>
              <li className="nav-bar-link"><NavLink to="/" > Log Out </NavLink> </li>
            </ul>

          </div>
          <div className="col-lg-10">

            <hr className='container-fluid' />
            <div className="breadcrumbs">
              <p className="bread">
                <span><Link to="/administration">Admin</Link></span> / <span>Product Categories</span></p>
              <h1 className='text-center bg-light'>Product Categories</h1>
              <div className='text-right'>
                <Link to="/administration/Category" className="btn btn-success">Add Category</Link>
              </div>
            </div>
            <table className='table table-bordered table-striped'>
              <tr>
                <th>Action</th>
                <th>No</th>
                <th>Name</th>
                <th>Image</th>
              </tr>
                {
                  datas.map((data,item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link className="btn btn-primary " to ={"/administration/Category/" + data._id}>Edit</Link>
                            <button className="btn btn-danger" onClick={(e) => deletecategory(e, data._id)} >Delete</button>
                          </td>
                          <td>{data.srno}</td>
                          <td>{data.name}</td>
                          <td><img src={"http://localhost:8081/" + data.imgpath} style={{ height: '70px' }} /></td>
                         
                        </tr>
                      </>
                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
        
  )
}

export default Categories;