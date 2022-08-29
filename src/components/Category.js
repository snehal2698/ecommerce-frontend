import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'
function Category() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: '',
    name: '',
    imagepath: '',
    srno: ''
  })
  
  let { id } = useParams();
  useEffect(() => {
    if (id !== null) {
      axios.post('http://localhost:8081/productcategory/get/', { data: { id: id } })
        .then((response) => {
          const newData = { ...data };
          newData["id"] = response.data.data._id;
          setData(newData);
        })
    }
  }, []);

  function handle (e){        
    //let newData = {...data};
    if(e.target.id === "image"){
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
          if(reader.result != null)
          {
            const newData = {...data};
            newData[e.target.id] = reader.result.toString();
            setData(newData);
          }
        }
    }
    else{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
}

  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:8081/productcategory/save", 
    {
      data: {
        id: data.id === null ? "" : data.id,
        name: data.name,
        image: data.imagepath,
        srno: data.srno
      }
    }).then(res => {
      navigate('/administration/categories');
    })
  }

  return (

    <div>
      <hr className='container' />
      <div className="breadcrumbs">
        <p className="bread"><span><Link to="/administration">Admin</Link></span> / <span> <Link to="/administration/Categories"> Product Categories </Link></span>/<span> Product Category</span></p>
        <h1 className='text-center bg-light'>Add Category</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-10 col-md-8 mx-auto">
            <form action="">


              <div className="mb-3">
                <label for="srno">Sr No</label>
                <input className="form-control" type="number" min="1" value={data.srno} id="srno" onChange={(e) => handle(e)} />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Category Name</label>
                <input type="text" className="form-control" value={data.name} onChange={(e) => { handle(e) }} id="name" placeholder="Enter Category name"
                  name="name" />
              </div>

              <div className="mb-3">
                <label for="image">Image</label>
                <input type="file" className="form-control" onChange={(e) => handle(e)} id="image" accept='image/*' />
                <button type="submit" className="btn btn-primary" onClick={(e) => { submit(e) }}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}
export default Category;
