import React, { useEffect, useState } from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';


const Categories = () => {
  const navStyle = ({isActive}) =>{
    return{
      color : isActive ? '#6c7ae0' : '',
      position : isActive ? 'relative' : '',
    }
  }

  const headers= {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
}

  function deleteCategory(event){
    event.preventDefault();
    if(window.confirm("Sure to delete?")){
      axios.delete('http://localhost:8081/productcategory/delete' + event.target.value, headers)
          .then((response) => {
              axios.post('http://localhost:8081/productcategory/delete')
                .then((response) => {
                    setAPIData(response.data.data.data);
                })
          })
      }
  }
  

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.post('http://localhost:8081/productcategory/delete')
          .then((response) => {
              setAPIData(response.data.data.data);
          })
  }, [])


  const [ data, setCategories] = useState([]);
   function load(){
    axios.post("http://localhost:8081/productcategory/list").then((res)=>{setCategories(res.data.data); console.log(res.data)})
   }

  useEffect((e)=>{
    load();
  },[])

  // function deleteCategory(e,id){
  //   e.preventDefault();
  //   alert("delete")
  //   axios.post("http://localhost:8081/productcategory/delete",{data:{id:id}}).then(res=>load())
  // }
  return (
    <>
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
                <th>Image</th>
                <th>Name</th>
              </tr>
              

                {
                  data.map((item, d) => {
                    return (
                            <>
                            <tr key={ item._id }>
                            <td>
                                <a className='btn btn-primary' href='#'>Edit</a>
                                <br />
                                {/* <button className="btn btn-danger" onClick={(e) =>deleteCategory(e, data._id)} >Delete</button> */}
                                <button  value={data._id} onClick={deleteCategory} class="btn btn-danger">Delete</button>

                            </td>
                              <td>{ item.srno }</td>
                              <td><img src={ "http://localhost:8081/" + item.imagepath } /></td>
                              <td>{ item.name }</td>  
                            </tr>
                            </>
                          )
                        })       
                      }
                     
                      </table>

                      
                  
                       

              <Outlet />

          </div>
        </div>
      </div>
    </>
  )

};
export default Categories;