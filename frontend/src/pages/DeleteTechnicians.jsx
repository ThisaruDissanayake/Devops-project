import React,{useState} from "react"
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";

const DeleteTechnicians =()=>{
    
    const [loading, setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    
    const handleDeleteTechnician=() => {
        setLoading(true);
        axios
          .delete(`http://localhost:5555/technicians/${id}`)
          .then(() => {
            setLoading(false);
            navigate('/home');
          })
  
          .catch((error) => {
            setLoading(false);
            alert('An error happened. Please check console');
            console.log(error);
          });
      };

  return (
   <div className="p-4 ">
     <BackButton/>
    <h1 className="text-3xl my-4 font-a_1">Are you want to delete this Technician data?</h1>
    {loading ? <Spinner/>:''}
    <div className="flex flex-col items-center border-2 border-black rounded-xl w-[400px] p-4 mx-auto ">
      <button className="p-2  bg-red-600 text-white m-4 w-full" 
      onClick={handleDeleteTechnician}>
        Yes, Delete
        </button>


    </div>

    
    </div>
  )
}
export default DeleteTechnicians