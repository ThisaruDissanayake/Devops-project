import React,{useState,useEffect} from "react"
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
import bg_1 from "../assets/Bg.png"

const UpdateTechnicians =()=>{
    const [employeeID, setEmployeeID]= useState('');
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [jobTitle, setJobTitle]= useState('');
    const [experinceYears, setExperinceYears]= useState('');
    const [address, setAddress]= useState('');
    const [image, setImage]= useState('');
    const [contactNo, setContactNo]= useState('');
    const [loading, setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    
    useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5555/technicians/${id}`)
          .then((response) => {
            setEmployeeID(response.data.employeeID);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAddress(response.data.address);
            setJobTitle(response.data.jobTitle);
            setContactNo(response.data.contactNo);
            setImage(response.data.image);
            setExperinceYears(response.data.experinceYears);
            setLoading(false);
          })
  
          .catch((error) => {
            setLoading(false);
            alert('An error happened. Please check console');
            console.log(error);
          });
      }, []);


    const handleUpdateTechnician=()=>{
        const data={
            employeeID,
            firstName,
            lastName,
            jobTitle,
            experinceYears,
            address,
            contactNo,
            image,
          
        };
        setLoading(true);
        axios
        .put(`http://localhost:5555/technicians/${id}`,data)
        .then(() => {
            setLoading(false);
            navigate('/home');
        })

        .catch((error)=>{
            setLoading(false);
            alert('An error happened.Please check Console');
            console.log(error);
        });

    };

  return (
    <div className="p-4 "  style={{
        backgroundImage: `url(${bg_1})`,
        backgroundSize: "100% 100%",
      
        
      }}>
    <BackButton/>
    <h1 className="text-3xl my-4 text-center text-white font-a_1">Update Data of a Technician</h1>
    {loading ? <Spinner/>:''}
    <div className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto bg-blue-300">

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Technician ID :</label>
        <input
        type="text"
        value={employeeID}
        onChange={(e)=> setEmployeeID(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full "/>
    </div>


    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">First Name :</label>
        <input
        type="text"
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full"/>
    </div>

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Last Name :</label>
        <input
        type="text"
        value={lastName}
        onChange={(e)=> setLastName(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full"/>
    </div>

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Job Title :</label>
        <input
        type="text"
        value={jobTitle}
        onChange={(e)=> setJobTitle(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full"/>
    </div>

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Experience Years :</label>
        <input
        type="number"
        value={experinceYears}
        onChange={(e)=> setExperinceYears(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full "/>
    </div>

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Address :</label>
        <input
        type="text"
        value={address}
        onChange={(e)=> setAddress(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full"/>
    </div>

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Image :</label>
        <input
        type="text"
        value={image}
        onChange={(e)=> setImage(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full"/>
    </div>

    <div className="my-2">
        <label className="text-xl mr-4 text gray-500">Contact Number :</label>
        <input
        type="text"
        value={contactNo}
        onChange={(e)=> setContactNo(e.target.value)}
        className="border-2 border-gray-500 px-4 py-1 w-full"/>
    </div>
   
  
    <button className="p-2 bg-sky-300 m-8  text-white bg-black" onClick={handleUpdateTechnician}>Save</button>


    </div>
   </div>
  )
}
export default UpdateTechnicians