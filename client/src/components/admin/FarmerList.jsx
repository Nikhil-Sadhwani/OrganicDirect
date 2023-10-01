import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LogContext from "../../Context/logInOut/LogContext";
import AlertContext from "../../Context/alert/AlertContext";

export default function StockDetails() {
  const LogObj = useContext(LogContext);
  const AlertObj = useContext(AlertContext);
  const [farmers, setFarmers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function dataget() {
      await axios
        .get(`http://localhost:8080/farmerlist`)
        .then((response) => {
          if (response.data.message === "No Items") {
            console.log(response.data.message);
          } else {
            setFarmers(response.data.data);
            // console.log(response.data.data);
          }
        })
        .catch((err) => console.log(err));
    }
    dataget();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/signup/${id}`)
      .then((response) => {
        AlertObj.showAlert(response.data.message, "Success", "green");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="relative top-[100px]">
        <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B] mb-7">
          Farmer List
        </h2>
        <div
          className="overflow-x-auto p-5 shadow-lg w-[98%] m-auto "
          style={{ border: "2px solid #ebdcdc" }}
        >
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Farmer Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Phone Number
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Alternative Number
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Address
                </th>
              </tr>
            </thead>
            {farmers.length === 0 ? (
              <h2>No Farmer</h2>
            ) : (
              <tbody className="divide-y divide-gray-200">
                {farmers.map((farmer) => {
                  return (
                    <>
                      <tr
                        className="odd:bg-gray-50 hover:bg-gray-200 cursor-pointer"
                        onClick={() => navigate(`/stocks/${farmer._id}`)}
                      >
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {farmer.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {farmer.email}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {farmer.phonenumber}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {/* ₹ {farmer.totalAmout} */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {farmer.address}
                        </td>
                      </tr>
                      <div className="text-right w-[480%] pt-2 mb-3">
                        <button
                          onClick={() => handleDelete(farmer._id)}
                          className="bg-white text-[1rem] p-1 text-black hover:bg-black hover:text-white hover:border-white"
                          style={{
                            borderRadius: "7px",
                            border: "2px solid black",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      {/* <Link
        to="/sellcrop"
        className="bg-black text-white w-[100px] h-[100px] text-[4rem] text-center absolute bottom-[3px] right-[3px]"
        style={{ borderRadius: "50%" }}
      >
        <i class="ri-add-fill"></i>
      </Link> */}
    </>
  );
}
