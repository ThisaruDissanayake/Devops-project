import React,{useEffect} from "react"
import './mid_2.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from "../assets/p_01.png";
import img1 from "../assets/p_02.png";
import img2 from "../assets/p_03.jpg";

const Data=[
    {
        id:1,
        imgSrc: img,
        ServiceName : 'Mishel Breewan',
        Dis : 'Contact Number: 0704566444',

    },
    {
        id:2,
        imgSrc: img2,
        ServiceName : 'Brayan Dewson',
        Dis : 'Contact Number :070987455666',

    },
    {
        id:3,
        imgSrc: img1,
        ServiceName : 'Minara Pahandi',
        Dis : 'Contact Number:0987654555',

    }

]

function Mid_2() {
    useEffect(()=>{
        Aos.init({duration:2000})
    
      },[])

  return (
    <section className="main1 container section">
        <div className="secTitle1">
            <h3  className="title">
                OUR TEAM
            </h3>
            <h4  className="title1  text-2xl my-10 ">
             
             This is our team.If you have any issue please contact any of us.
             We always ready to help you!!!
           
            
            </h4>
        </div>

        <div className="secContent1 grid">
            {
                 Data.map(({id,imgSrc,ServiceName,Dis}) =>{
                    return(
                        <div key={id} 
                        data-aos="fade-up"
                        className="singleDestination">
                         <div className="imageDiv_1">
                            <img src ={imgSrc} alt={ServiceName}/>
                         </div>

                         <div className="cardInfo">
                            <h4 className="Name text-3xl">{ServiceName}</h4>
                            <h4 className="Name1 text-2xl">{Dis}</h4>
                         </div> 
                        </div>
                    )

                 }) 
            }         
        </div>
    </section>    
  )
}

export default Mid_2