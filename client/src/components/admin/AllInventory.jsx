import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LogContext from "../../Context/logInOut/LogContext";

export default function StockDetails() {
  const LogObj = useContext(LogContext);
  const [farmers, setFarmers] = useState([]);
  const [crops, setCrops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function dataget() {
      await axios
        .get(`http://localhost:8080/inventory`)
        .then((response) => {
          if (response.data.message === "No Items") {
            console.log(response.data.message);
          } else {
            setFarmers(response.data.data);
          }
        })
        .catch((err) => console.log(err));
    }
    async function getCrops() {
      await axios
        .get(`http://localhost:8080/stocks/unique`)
        .then((response) => {
          if (response.data.message === "No Items") {
            console.log(response.data.message);
          } else {
            setCrops(response.data.data);
          }
        })
        .catch((err) => console.log(err));
    }
    getCrops();
    dataget();
  }, []);

  return (
    <>
      <div className="relative top-[100px]">
        <h2 className="h-[61px] text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B] mb-7">
          Inventory
        </h2>
        <div
          className="overflow-x-auto p-5 shadow-lg w-[98%] m-auto "
          style={{ border: "2px solid #ebdcdc" }}
        >
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Crops Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total Kg
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total Amount
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
                        onClick={() => navigate(`/profitlist/${farmer._id}`)}
                      >
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {farmer._id}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {crops.some((crop) => crop._id === farmer._id)
                            ? farmer.Total_Kg -
                              crops.filter((item) => {
                                return item._id == farmer._id;
                              })[0]["Total_Kg"]
                            : farmer.Total_Kg}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {crops.some((crop) => crop._id === farmer._id)
                            ? (farmer.Total_Amount / farmer.Total_Kg) *
                              (farmer.Total_Kg -
                                crops.filter((item) => {
                                  return item._id == farmer._id;
                                })[0]["Total_Kg"])
                            : farmer.Total_Amount}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <Link
        to="/sellinform"
        className="bg-white text-black absolute bottom-[20px] right-[20px] text-[21px] p-[10px] hover:bg-black hover:text-white"
        style={{ border: "2px solid black", borderRadius: "10px" }}
      >
        Sell Crop
      </Link>
    </>
  );
}
