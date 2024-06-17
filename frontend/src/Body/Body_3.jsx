import "./Body_3.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import bg_1 from "../assets/Bg.png";

const Body_3 = () => {
  const [technicians, setTechnicians] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/technicians")
      .then((response) => {
        setTechnicians(response.data.data);
        setRecords(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const Filter = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredTechnicians = technicians.filter((technician) =>
      technician.jobTitle.toLowerCase().includes(searchValue)
    );
    setRecords(filteredTechnicians);
  };

  return (
    <div className="body_3-div "  style={{
      backgroundImage: `url(${bg_1})`,
      backgroundSize: "100% 100%",
    }}>
      
      <div className="p-4">
     
      <div className="flex items-center">
  <h1 className="text-3xl my-2 font-a_1 text-white pt-12">
    Are you find a technician?
  </h1>
</div>
<div>
  <h1 className="text-xl  font-a_1 text-blue-300" >
    Search your technician here...
  </h1>
  </div>

        <div className="mb-4 w-[400px] "> {}
        <input
          
          type="text"
          className="form-control "
          onChange={Filter}
          placeholder="Search by Job Title" 
        />
        </div>
        
        {loading ? (
          <Spinner />
        ) : (
            <table className="table mr:top-20">
            <thead>
              <tr>
                <th className="text-center bg-black text-white">No</th>
                <th className="text-center bg-black text-white ">First Name</th>
                <th className="text-center bg-black text-white ">Last Name</th>
                <th className="text-center bg-black text-white">Job Title</th>
                <th className="text-center bg-black text-white">Experience Years</th>
                <th className="text-center bg-black text-white">Address</th>
                <th className="text-center bg-black text-white">Contact Number</th>
                <th className="text-center bg-black text-white">Image</th>
                <th className="text-center bg-black text-white">Show Details</th>
                
              </tr>
            </thead>
            <tbody>
              {records.map((technician, index) => (
                <tr key={technician._id}>
                  <td className="text-center ">{index + 1}</td>
                  <td className="text-center ">{technician.firstName}</td>
                  <td className="text-center ">{technician.lastName}</td>
                  <td className="text-center ">{technician.jobTitle}</td>
                  <td className="text-center ">{technician.experinceYears}</td>
                  <td className="text-center ">{technician.address}</td>
                  <td className="text-center ">{technician.contactNo}</td>
                  <td className="image-center">
                  <img
                    src={technician.image}
                    alt={""}
                    style={{ maxWidth: "100px", maxHeight:"75px" }}
                    />
                  </td>
                  <td className="text-center ">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/details/${technician._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Body_3;
