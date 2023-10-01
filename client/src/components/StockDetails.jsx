import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LogContext from "../Context/logInOut/LogContext";
import axios from "axios";
import Registerationform from "./sellerComponents/Registerationform";
import AlertContext from "../Context/alert/AlertContext";
import Payment from "./Payment";

export default function StockDetails() {
  const LogObj = useContext(LogContext);
  const AlertObj = useContext(AlertContext);

  const [inventory, setInventory] = useState([]);
  const [showPay, setShowPay] = useState(false);
  const [cropId, setCropId] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function dataget() {
      setShowPay(false);
      await axios
        .get(`http://localhost:8080/inventory/${id}`)
        .then((response) => {
          if (response.data.message === "No Items") {
            console.log(response.data.message);
          } else {
            setInventory(response.data.data);
            // console.log(response.data.data);
          }
        })
        .catch((err) => console.log(err));
    }
    dataget();
  }, []);

  const handleUpdate = (id, status) => {
    if (status === "Complete") {
      setShowPay(true);
      setCropId(id);
    } else {
      const data = {
        status: status,
      };
      axios
        .put(`http://localhost:8080/inventory/${id}`, data)
        .then((response) => {
          AlertObj.showAlert(response.data.message, "Success", "green");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {/* {LogObj.cookies.role === "user" ? ( */}
      {showPay ? (
        <Payment id={id} cropId={cropId} />
      ) : window.localStorage.getItem("role") === "user" ? (
        <Registerationform />
      ) : (
        <>
          <div className="relative top-[100px]">
            <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B] mb-7">
              StockDetails
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
                      Kg
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Amount Per/kg
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Total
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Status
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
                      <hr className="w-[378%]" />
                      <div className="w-[378%] text-center text-[1rem] py-[14px] ">
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
                                {item.cropName}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {item.totalKg}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                ₹ {item.amountPerKg}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                ₹ {item.totalAmout}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {item.status}
                              </td>
                            </tr>
                            {/* {LogObj.cookies.role === "admin" ? ( */}
                            {window.localStorage.getItem("role") === "admin" ? (
                              item.status === "Request" ? (
                                <div className="flex w-[355%] justify-end pt-2 mb-3">
                                  <button
                                    onClick={() =>
                                      handleUpdate(item._id, "Accept")
                                    }
                                    className="mr-3 bg-white text-[1rem] p-1 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white"
                                    style={{
                                      borderRadius: "7px",
                                      border: "2px solid blue",
                                    }}
                                  >
                                    Accept
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleUpdate(item._id, "Decline")
                                    }
                                    className="bg-white text-[1rem] p-1 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                                    style={{
                                      borderRadius: "7px",
                                      border: "2px solid red",
                                    }}
                                  >
                                    Decline
                                  </button>
                                </div>
                              ) : item.status === "Transporting" ? (
                                <div className="flex w-[295%] justify-between pt-2 mb-3">
                                  <div>
                                    <h2>Stocks are recive ?</h2>
                                  </div>
                                  <div>
                                    <button
                                      onClick={() =>
                                        handleUpdate(
                                          item._id,
                                          "Payment Pending"
                                        )
                                      }
                                      className="mr-3 bg-white text-[1rem] p-1 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white"
                                      style={{
                                        borderRadius: "7px",
                                        border: "2px solid blue",
                                      }}
                                    >
                                      Yes
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleUpdate(
                                          item._id,
                                          "Stocks are not recevie"
                                        )
                                      }
                                      className="bg-white text-[1rem] p-1 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                                      style={{
                                        borderRadius: "7px",
                                        border: "2px solid red",
                                      }}
                                    >
                                      No
                                    </button>
                                  </div>
                                </div>
                              ) : item.status === "Payment Pending" ? (
                                <div className="flex w-[349%] justify-between pt-2 mb-3">
                                  <div>
                                    <h2>Giving Payment</h2>
                                  </div>
                                  <div>
                                    <button
                                      //navigation to payment page
                                      onClick={() =>
                                        handleUpdate(item._id, "Complete")
                                      }
                                      className="w-[54px] mr-3 bg-white text-[1rem] p-1 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white"
                                      style={{
                                        borderRadius: "7px",
                                        border: "2px solid blue",
                                      }}
                                    >
                                      Pay
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <></>
                              )
                            ) : item.status === "Accept" ? (
                              <div className="flex w-[390%] justify-end pt-2 mb-3">
                                <button
                                  onClick={() =>
                                    handleUpdate(item._id, "Transporting")
                                  }
                                  className=" bg-white text-[1rem] p-1 text-black hover:bg-black hover:text-white hover:border-white"
                                  style={{
                                    borderRadius: "7px",
                                    border: "2px solid black",
                                  }}
                                >
                                  Transport Stock
                                </button>
                              </div>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </tbody>
                    {/* {LogObj.cookies.role !== "admin" ? ( */}
                    {window.localStorage.getItem("role") !== "admin" ? (
                      <>
                        <hr className="w-[407%]" />
                        <Link to="/sellcrop">
                          <div className="w-[407%] text-center text-[1rem] py-[14px] hover:bg-gray-50">
                            Add Crop
                          </div>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </table>
            </div>
          </div>
          <Link
            to="/sellcrop"
            className="hidden bg-black text-white w-[100px] h-[100px] text-[4rem] text-center absolute bottom-[3px] right-[3px]"
            style={{ borderRadius: "50%" }}
          >
            <i class="ri-add-fill"></i>
          </Link>
        </>
      )}
    </>
  );
}
