import React from 'react';
import Dboard from './Pages/DashBoard/Dboard';
import { HashRouter , Route, Routes } from 'react-router-dom';
import LogInForm from './Pages/LogIn/LogIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LogInProvider } from './Context/LogInContext';
import AddProduct from './Actions/AddProduct';
import ProductList from './Pages/ProductList/ProductList';

 const App = ()=>{
  return (
    <div className="app">
      <LogInProvider>
      <HashRouter>
        <Routes>
          <Route path = "/" element = {<LogInForm/>}/>
          <Route path = "/dashBoard" element = {<Dboard/>}/>
          <Route path = "/addProduct" element = {<AddProduct/>}/>
          <Route path='/productList' element = {<ProductList/>}/>
          <Route path="/addproduct/:id" element={<AddProduct />} />

        </Routes>
        <ToastContainer/>
      </HashRouter>
      </LogInProvider>

    </div>
  );
}
export default App;
