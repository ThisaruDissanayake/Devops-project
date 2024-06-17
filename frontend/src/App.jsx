import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import CreateTechnicians from "./pages/CreateTechnicians";
import Signin from "./pages/Signin";
import DeleteTechnicians from "./pages/DeleteTechnicians";
import UpdateTechnicians from "./pages/UpdateTechnicians";
import ShowTechnicians from "./pages/ShowTechnicians";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./pages/Details";



const App =()=>{
  return (
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/technicians/create' element={<CreateTechnicians/>} />
      <Route path='/technicians/delete/:id' element={<DeleteTechnicians/>} />
      <Route path='/technicians/update/:id' element={<UpdateTechnicians/>} />
      <Route path='/technicians/details/:id' element={<ShowTechnicians/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  );
};
export default App




