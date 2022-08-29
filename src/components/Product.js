import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export default function Product(){

    return(
      <>
      
      <div class="container">
         <div className="breadcrumbs">
         <p className="bread">
                <span><Link to="/administration">Admin</Link></span> / <span><Link to="/administration/Products">Products</Link></span> / <span>Product</span></p>
              <h1 className='text-center bg-light'>Product</h1>
         </div>
              <div class="row">
            <div class="col-md-12 text-left">
                <input type="hidden" formControlName="id"></input>
                <div class="form-group">
                    <label>Category <span>*</span></label>
                    <select class="form-control"  >
                      <option value="Fashion">Fashion</option>
                      <option value="Automobile">Automobile</option>
                    </select>
                </div>
                <div class="row">
                  <div class="col-lg-8">
                    <div class="form-group">
                        <label class="info-title">Name <span>*</span></label>
                        <input class="form-control" type="text"  required />
                        <input class="form-control" id="imgcontent" type="hidden"  required />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                        <label class="info-title">Picture</label>
                        <input class="form-control" type="file" required />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="info-title">Description <span>*</span></label>
                  <textarea class="form-control"  ></textarea>
              </div>
              <div class="row">
                <div class="col-lg-4">
                    <div class="form-group">
                      <label class="info-title">MRP<span>*</span></label>
                      <input class="form-control" type="number" ></input>
                  </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                      <label class="info-title">Price<span>*</span></label>
                      <input class="form-control" type="number"  ></input>
                  </div>
                </div>              
              </div>
              <button type="submit"  class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
   
      </>
    )
}