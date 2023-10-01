import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Registerationform from "../sellerComponents/Registerationform";

export default function StockDetails() {
  const [inventory, setInventory] = useState([]);
  const [sellCrop, setSellCrop] = useState([]);
  const [existCrop, setExistCrop] = useState(0);

  const { crop } = useParams();
  useEffect(() => {
    async function dataget() {
      await axios
        .get(`http://localhost:8080/stocks/${crop}`)
        .then((response) => {
          if (response.data.message === "No Items") {
            console.log(response.data.message);
          } else {
            setInventory(response.data.data);
          }
        })
        .catch((err) => console.log(err));
    }
    dataget();
    getSellingCrop();
    getExistCrop();
  }, []);

  async function getSellingCrop() {
    await axios
      .get(`http://localhost:8080/stocks/unique/${crop}`)
      .then((response) => {
        if (response.data.message === "No Items") {
          console.log(response.data.message);
        } else {
          setSellCrop(response.data.data[0]);
          // console.log(response.data.data[0]);
        }
      })
      .catch((err) => console.log(err));
  }

  async function getExistCrop() {
    await axios
      .get(`http://localhost:8080/inventory/singlecrop/${crop}`)
      .then((response) => {
        if (response.data.message === "No Items") {
          console.log(response.data.message);
        } else {
          setExistCrop(
            response.data.data[0]["Total_Amount"] /
              response.data.data[0]["Total_Kg"]
          );
          // console.log(
          //   response.data.data[0]["Total_Amount"] /
          //     response.data.data[0]["Total_Kg"]
          // );
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* {LogObj.cookies.role === "user" ? ( */}
      {window.localStorage.getItem("role") === "user" ? (
        <Registerationform />
      ) : (
        <>
          <div className="relative top-[100px]">
            <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B] mb-7">
              Profit of {crop}
            </h2>
            <div
              className="overflow-x-auto p-5 shadow-lg w-[98%] m-auto "
              style={{ border: "2px solid #ebdcdc" }}
            >
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name of Customer
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Crop Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Total kg
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Amount of crops (per kg)
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Total Amount
                    </th>
                  </tr>
                </thead>
                {inventory.length === 0 ? (
                  // LogObj.cookies.role !== "admin" ? (
                  window.localStorage.getItem("role") !== "admin" ? (
                    <>
                      <hr className="w-[378%]" />
                      <Link to="/sellcrop">
                        <div className="w-[378%] text-center text-[1rem] py-[14px] hover:bg-gray-50">
                          Add Crop
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      {/* <hr className="w-[414%]" /> */}
                      <div className="w-[414%] text-center text-[1rem] py-[14px] ">
                        No Crops
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <tbody className="divide-y divide-gray-200">
                      {inventory.map((item) => {
                        return (
                          <>
                            <tr className="odd:bg-gray-50">
                              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {item.name}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {item.cropName}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {item.kg}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                ₹ {item.amountPerKg}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                ₹ {item.totalAmount}
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                    <div className="flex w-[362%] justify-end pt-3">
                      <div className="mr-[70px]">
                        <h2>Total Profit:</h2>
                      </div>

                      <div>
                        <p>
                          ₹{" "}
                          {sellCrop.Total_Amount -
                            existCrop * sellCrop.Total_Kg}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}
