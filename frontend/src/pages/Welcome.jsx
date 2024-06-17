
import Nav_1 from "../Nav/Nav_1.jsx";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import React,{useState} from "react";
import Mid from '../Mid/Mid';
import Mid_2 from '../Mid/Mid_2';


function Welcome() {
    return (<>
        <Nav_1/>
      <div className="Welcome bg-blue-500 w-full h-screen">
    
      
        <Body/>
        <Mid/>
        <Mid_2/>
        <Footer/>
      </div>
      </>
    );
  };
  
  export default Welcome


  


