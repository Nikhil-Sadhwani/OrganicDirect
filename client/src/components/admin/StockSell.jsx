import React, { useContext, useState } from "react";
import formBg from "../../assets/formBg.jpg";

import LogContext from "../../Context/logInOut/LogContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../Context/alert/AlertContext";

export default function SellingForm() {
  const [sellCrop, setSellCrop] = useState(0);
  const [existCrop, setExistCrop] = useState(0);

  const LogObj = useContext(LogContext);
  const AlertObj = useContext(AlertContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    cropName: "",
    kg: 0,
    amountPerKg: 0,
    totalAmount: 0,
  });

  async function getSellingCrop(crop) {
    await axios
      .get(`http://localhost:8080/stocks/unique/${crop}`)
      .then((response) => {
        if (response.data.message === "No Items") {
          console.log(response.data.message);
        } else {
          setSellCrop(response.data.data[0]["Total_Kg"]);
          // console.log(response.data.data[0]["Total_Kg"]);
        }
      })
      .catch((err) => console.log(err));
  }

  async function getExistCrop(crop) {
    await axios
      .get(`http://localhost:8080/inventory/singlecrop/${crop}`)
      .then((response) => {
        if (response.data.message === "No Items") {
          console.log(response.data.message);
        } else {
          setExistCrop(response.data.data[0]["Total_Kg"]);
          // console.log(response.data.data[0]["Total_Kg"]);
        }
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleRegister = async () => {
    if (data.name !== "") {
      if (data.phonenumber !== "") {
        if (data.cropName !== "") {
          await getSellingCrop(data.cropName);
          await getExistCrop(data.cropName);
          if (data.kg !== 0) {
            if (data.amountPerKg !== 0) {
              data.totalAmount = data.kg * data.amountPerKg;
              if (existCrop - sellCrop < data.kg) {
                AlertObj.showAlert(
                  `${data.kg} kg Stock is Not Available`,
                  "Danger",
                  "red"
                );
              } else {
                axios
                  .post("http://localhost:8080/stocks", data)
                  .then((response) => {
                    AlertObj.showAlert(
                      response.data.message,
                      "Success",
                      "green"
                    );
                    navigate(`/allinventory`);
                  })
                  .catch((err) => console.log(err));
              }
            } else {
              AlertObj.showAlert("Amount per kg is empty", "Warning", "yellow");
            }
          } else {
            AlertObj.showAlert("Kg is empty", "Warning", "yellow");
          }
        } else {
          AlertObj.showAlert("Crop Name is empty", "Warning", "yellow");
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
      {window.localStorage.getItem("role") !== "admin" ? (
        <></>
      ) : (
        <div
          className={`relative p-[25px]  bg-no-repeat bg-cover bg-fixed`}
          style={{
            backgroundImage: `url(${formBg}) `,
          }}
        >
          <h2 className="mt-24 h-[63px] text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B]">
            Selling Crop
          </h2>

          <div className=" m-auto w-[90%] shadow-lg">
            <div className="m-auto w-[50%] bg-white bg-opacity-[0.5] p-8 lg:col-span-3 lg:p-12">
              <h2 className=" text-[2rem] mb-5 font-bold">Customer Details</h2>
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
                    name="kg"
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
      )}
    </>
  );
}
