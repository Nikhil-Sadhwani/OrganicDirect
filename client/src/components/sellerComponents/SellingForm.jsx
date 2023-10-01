import React, { useContext, useState } from "react";
import formBg from "../../assets/formBg.jpg";

import LogContext from "../../Context/logInOut/LogContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../Context/alert/AlertContext";

export default function SellingForm() {
  const LogObj = useContext(LogContext);
  const AlertObj = useContext(AlertContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    _id: window.localStorage.getItem("userId"),
    name: "",
    phonenumber: "",
    altPhonenumber: "",
    address: "",
    bankno: "",
    cropName: "",
    amountPerKg: 0,
    totalKg: 0,
    totalAmout: 0,
    status: "Request",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    if (data.name !== "") {
      if (data.phonenumber !== "") {
        if (data.address !== "") {
          if (data.bankno !== "") {
            if (data.cropName !== "") {
              if (data.totalKg !== 0) {
                if (data.amountPerKg !== 0) {
                  data.totalAmout = data.totalKg * data.amountPerKg;
                  axios
                    .post("http://localhost:8080/inventory", data)
                    .then((response) => {
                      AlertObj.showAlert(
                        response.data.message,
                        "Success",
                        "green"
                      );
                      navigate(
                        `/stocks/${window.localStorage.getItem("userId")}`
                      );
                    })
                    .catch((err) => console.log(err));
                } else {
                  AlertObj.showAlert("Amount is empty", "Warning", "yellow");
                }
              } else {
                AlertObj.showAlert(
                  "Total Number of Wieght is empty",
                  "Warning",
                  "yellow"
                );
              }
            } else {
              AlertObj.showAlert("Crop Name is empty", "Warning", "yellow");
            }
          } else {
            AlertObj.showAlert(
              "Bank Account Number is empty",
              "Warning",
              "yellow"
            );
          }
        } else {
          AlertObj.showAlert("Address is empty", "Warning", "yellow");
        }
      } else {
        AlertObj.showAlert("Phone Number is empty", "Warning", "yellow");
      }
    } else {
      AlertObj.showAlert("Name is empty", "Warning", "yellow");
    }
  };
  return (
    <>
      <div
        className={`relative p-[25px]  bg-no-repeat bg-cover bg-fixed`}
        style={{
          backgroundImage: `url(${formBg}) `,
        }}
      >
        <h2 className="mt-24 h-[63px] text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B]">
          Crop sell
        </h2>

        <div className=" m-auto w-[90%] shadow-lg">
          <div className="m-auto w-[50%] bg-white bg-opacity-[0.5] p-8 lg:col-span-3 lg:p-12">
            <h2 className=" text-[2rem] mb-5 font-bold">Personal Details</h2>
            <form action="" className="space-y-4 w-[96%] ml-3">
              <div>
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold">
                  Phone Number
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold">
                  Alternative Phone Number
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="text"
                  id="phonenumber"
                  name="altPhonenumber"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold">
                  Address
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Address"
                  type="text"
                  id="address"
                  name="address"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold">
                  Bank Account Number
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Bank Account Number"
                  type="text"
                  name="bankno"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>

            <h2 className=" text-[2rem] mb-5 font-bold">Crop Details</h2>
            <form action="" className="space-y-4 w-[96%] ml-3">
              <div>
                <label htmlFor="name" className="font-bold">
                  Crop Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="cropName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold">
                  Total Number of Wieght (in kg)
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Weight"
                  type="text"
                  id="phonenumber"
                  name="totalKg"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-bold">
                  Amount (per kg)
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Amount in rupee"
                  type="text"
                  id="phonenumber"
                  name="amountPerKg"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>
          </div>

          <div className="text-center mt-2">
            <button
              onClick={handleRegister}
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black"
            >
              Sell Crop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
