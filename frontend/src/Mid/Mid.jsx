import React,{useEffect} from "react"
import './mid.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from "../assets/plumber.jpg";
import img1 from "../assets/Electrician.jpg";
import img2 from "../assets/painters.jpg";

const Data=[
    {
        id:1,
        imgSrc: img,
        ServiceName : 'Plumber',
        Dis : 'Dealing with plumbing issues, leaky pipes, or installations? Our professional plumbers are here to help, ensuring your water and drainage systems run smoothly',

    },
    {
        id:2,
        imgSrc: img1,
        ServiceName : 'Electrician',
        Dis : 'Need electrical repairs, wiring installations, or lighting solutions? Our experienced electricians are just a click away, ready to tackle any electrical project in your home.',

    },
    {
        id:3,
        imgSrc: img2,
        ServiceName : 'Painter',
        Dis : 'Planning to refresh your home with a fresh coat of paint? Our talented painters will transform your space, bringing your vision to life with precision and artistry.',

    }

]

function Mid() {
    useEffect(()=>{
        Aos.init({duration:2000})
    
      },[])

  return (
    <section className="main1 container section">
        <div className="secTitle1">
            <h3  className="title">
                OUR SERVICES
            </h3>
            <h4  className="title1  text-2xl my-10">
            Welcome to our Technician Booking System! We're here to make your life easier by providing a seamless solution 
            for all your home improvement needs.
             We offer a range of skilled technicians, including electricians, plumbers, and painters, all at your fingertips.
            </h4>
        </div>

        <div className="secContent1 grid">
            {
                 Data.map(({id,imgSrc,ServiceName,Dis}) =>{
                    return(
                        <div key={id} 
                        data-aos="fade-up"
                        className="singleDestination">
                         <div className="imageDiv">
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

export default Mid