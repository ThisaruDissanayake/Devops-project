import Nav_2 from "../Nav/Nav_2.jsx";
import Body_2 from "../Body/Body_2";
import Footer from "../Footer/Footer";
import React,{useState} from "react";



function Home() {
    return (<>
        <Nav_2/>
      <div className="Welcome bg-red-600 w-full h-screen">
        <Body_2/>
        <Footer/>
      </div>
      </>
    );
  };
export default Home;
