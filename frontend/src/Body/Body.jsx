import React from "react";
import "./Body.css";
import bg from "../assets/bgimg_2.png";



const Body = () => {
  return (
    <div className="body-div" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "100% 100%",
      
    }}>
      
      <p className="text-8xl my-4 text-center text-white font-a_2 " style={{ marginTop: "200px",paddingTop:"200px" }}>Welcome </p>
      <p className="text-5xl my-4 text-center text-white font-a_1">Quick helper Service </p>
      <p className="text-3xl my-4 text-center text-white font-a_1" style={{ marginTop: "100px",paddingBottom:"100px" }}>Find your technician here.... </p>
     
                         
    </div>
  );
}

export default Body;

