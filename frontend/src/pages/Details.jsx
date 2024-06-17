import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton_2 from "../components/BackButton_2";
import Spinner from "../components/Spinner";
import bg_1 from "../assets/Bg.png";

const Details = () => {
  const [technician, setTechnician] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/technicians/${id}`)
      .then((response) => {
        setTechnician(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="p-4 "
      style={{
        backgroundImage: `url(${bg_1})`,
        backgroundSize: "100% 100%",
      }}
    >
      <BackButton_2 />
      <h2 className="text-3xl my-4 text-center text-blue-200 font-a_1">Am I suitable for you? </h2>
      <h2 className="text-3xl my-4 text-center text-blue-100 font-a_1"> Then call me and booking a day for you.</h2>

      
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto bg-white">
          <div className="my-4">
            <span className="text-xl text-gray-500">Image:</span>
            <div className="flex justify-center items-center border rounded-md text-center">
              <img
                src={technician.image}
                alt=""
                style={{ width: "350px", height: "400px" }}
              />
            </div>
          </div>

          <div className="my-2">
            <div className="grid grid-cols-2">
              <span className="text-xl text-gray-500">Technician Id:</span>
              <span>{technician.employeeID}</span>

              <span className="text-xl text-gray-500">First Name:</span>
              <span>{technician.firstName}</span>

              <span className="text-xl text-gray-500">Last Name:</span>
              <span>{technician.lastName}</span>

              <span className="text-xl text-gray-500">Job Title:</span>
              <span>{technician.jobTitle}</span>

              <span className="text-xl text-gray-500">Experience Years:</span>
              <span>{technician.experinceYears}</span>

              <span className="text-xl text-gray-500">Address:</span>
              <span>{technician.address}</span>

              <span className="text-xl text-gray-500">Contact Number:</span>
              <span>{technician.contactNo}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
