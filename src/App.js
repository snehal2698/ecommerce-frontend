import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Administration from './components//Administration';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Categories from './components/Categories';
import Category from './components/Category';
import Product from './components/Product';
import Products from './components/Products';
import Orders from './components/Orders';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Login' element={<Login />}/>
         <Route path='/administration' element={<Administration/>}/>
          <Route path='/administration/Dashboard' element={<Dashboard/>}/>
          <Route path='/administration/Categories' element={<Categories/>}/> 
          <Route path='/administration/Category' element={<Category/>}/> 
          <Route path='/administration/Product'element={<Product/>}/>
          <Route path='/administration/Products'element={<Products/>}/>
          <Route path='/administration/Orders'element={<Orders/>}/>
          <Route path='/administration/Category/:id' element={<Category/>}/> 

        
      </Routes>
      
       <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
