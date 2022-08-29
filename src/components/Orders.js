import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Orders() {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:5000/api/orders/listall')
          .then((response) => {
            console.log(response);
              setAPIData(response.data.data.data);
          })
  }, [])

      return (
          <div className=" m-5-auto container">
            <div class="breadcrumbs">
			<p class="bread"><span><Link to="/administration">Admin</Link></span> / <span>Orders</span></p>
		</div>
              <h2>All Orders</h2>
              <div class="table-responsive">
              <table class="table table-bordered table-stripped">
                <thead>
                  <tr>
                    <th style={{width:'80px'}}>No</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Products</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>        
                {APIData.map((data, i) => {
                    return (
                      <tr>
                        <td>{ i + 1 }</td>
                        <td>{ data.createdAt.toString().substr(0, 10) }</td>
                        <td>{ data.name } </td>
                        <td>{ data.address + ", " + data.city + ", " + data.pincode }</td>
                        <td>
                          <table class="table table-stripped">
                            <tr>
                              <th>Product</th>
                              <th>Qty</th>
                              <th>Price</th>
                              <th>Total</th>
                            </tr>
                            {
                              data.products.map(product => {
                                return(
                                <tr>
                                  <td>{product.title}</td>
                                  <td>{product.quantity}</td>
                                  <td>{product.price}</td>
                                  <td>{product.total}</td>
                                </tr>
                            )})}
                          </table>
                        </td>
                        <td>
                          { data.status }
                        </td>
                      </tr>
                      )})}           
                </tbody>
              </table>
            </div>
          </div>
      )    
}