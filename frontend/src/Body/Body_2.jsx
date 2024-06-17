import "./Body_2.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import bg_1 from "../assets/Bg.png";

const Body_2= () => {
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
      technician.employeeID.toLowerCase().includes(searchValue)
    );
    setRecords(filteredTechnicians);
  };

  return (
    <div className="body_2-div " style={{
      backgroundImage: `url(${bg_1})`,
      backgroundSize: "100% 100%",
    }}>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8 font-a_1 text-blue-200" style={{ marginTop: "30px",paddingTop:"30px" }}> Technicians List</h1>
          <Link to="/technicians/create">
          <MdOutlineAddBox className="text-sky-200 text-4xl" />
        </Link>
        </div>

        <div className="mb-4  w-[500px]"> {}
        <input
          type="text"
          className="form-control "
          onChange={Filter}
          placeholder="Search by ID" 
        />
        </div>
        
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2 ">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md bg-black text-white text-center ">No</th>
              <th className="border border-slate-600 rounded-md bg-black text-white text-center ">Technician ID</th>
              <th className="border border-slate-600 rounded-md bg-black text-white text-center ">First Name</th>
              <th className="border border-slate-600 rounded-md bg-black text-white max-md:hidden text-center ">Last Name</th>
              <th className="border border-slate-600 rounded-md bg-black text-white max-md:hidden text-center ">Job Title</th>
              <th className="border border-slate-600 rounded-md bg-black text-white max-md:hidden text-center "> Experince Years</th>
              <th className="border border-slate-600 rounded-md bg-black text-white max-md:hidden text-center "> Address</th>
              <th className="border border-slate-600 rounded-md bg-black text-white max-md:hidden text-center "> Image</th>
              <th className="border border-slate-600 rounded-md bg-black text-white max-md:hidden text-center "> Contact Number</th>
              <th className="border border-slate-600 rounded-md bg-black text-white text-center ">Operations</th></tr>
          </thead>
            <tbody>
              {records.map((technician, index) => (
                <tr key={technician._id}>
                   <td className="border border-slate-700 rounded-md text-center bg-white">
                  {" "}
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center bg-white">
                  {" "}
                  {technician.employeeID}
                </td>
                <td className="border border-slate-700 rounded-md text-center bg-white">
                  {" "}
                  {technician.firstName}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden bg-white">
                  {" "}
                  {technician.lastName}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden bg-white">
                  {" "}
                  {technician.jobTitle}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden bg-white">
                  {" "}
                  {technician.experinceYears}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden bg-white">
                  {" "}
                  {technician.address}
                </td>

                <td className="border border-slate-700 rounded-md image-center vertical-center bg-white">
                  <img
                    src={technician.image}
                    alt={""}
                    style={{ maxWidth: "100px", maxHeight:"75px" }}
                    />
                  </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden bg-white">
                  {" "}
                  {technician.contactNo}
                </td>
               
                <td className="border border-slate-700 rounded-md text-center bg-white">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/technicians/details/${technician._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>

                    <Link to={`/technicians/update/${technician._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-800" />
                    </Link>

                    <Link to={`/technicians/delete/${technician._id}`}>
                      <AiOutlineDelete className="text-2xl text-red-800" />
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

export default Body_2;
