import React, { useState } from "react";
import winterBG from "../../assets/winter/winterBG.jpg";

export default function Registerationform() {
  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    address: "",
    bankno: "",
    kishanno: "",
    soilhealthno: "",
    bhamashahno: "",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    if (data.name !== "") {
      if (data.phonenumber !== "") {
        if (data.address !== "") {
          if (data.bankno !== "") {
            if (data.kishanno !== "") {
              if (data.soilhealthno !== "") {
                if (data.bhamashahno !== "") {
                  console.log(data);
                } else {
                  console.log("Bhamashah card number is empty");
                }
              } else {
                console.log("Soil health card number is empty");
              }
            } else {
              console.log("Kishan credit card number is empty");
            }
          } else {
            console.log("Bank account number is empty");
          }
        } else {
          console.log("Address is empty");
        }
      } else {
        console.log("Phone Number is empty");
      }
    } else {
      console.log("Name is empty");
    }
  };
  return (
    <>
      <div
        className={`relative p-[25px] h-screen bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${winterBG}) `,
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <h2 className="mt-24 h-[63px] text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A6EEC5] to-[#00560B]">
            Registeration Form
          </h2>

          <div className="flex m-auto w-[90%] shadow-lg">
            <div className="w-[50%] bg-white  p-8 lg:col-span-3 lg:p-12">
              <h2 className=" text-[2rem] mb-5 font-bold">Personal Details</h2>
              <form action="" className="space-y-4">
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
                    id="email"
                    name="bankno"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            </div>

            <div
              className="w-[50%] bg-lime-300 p-8 lg:col-span-3 lg:p-12 bg-right"
              // style={{
              //   backgroundImage: `url(${BG}) `,
              // }}
            >
              <h2 className=" text-[2rem] mb-5 font-bold">
                Farmer Verification
              </h2>
              <form action="" className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-bold">
                    Kishan credit card
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Kishan credit card"
                    type="text"
                    name="kishanno"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <label htmlFor="name" className="font-bold">
                    Soil health card
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Soil health card"
                    type="text"
                    name="soilhealthno"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <label htmlFor="name" className="font-bold">
                    Bhamashah card
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Bhamashah card"
                    type="text"
                    name="bhamashahno"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            </div>
            <div className="absolute bottom-[3%] left-[46%]">
              <button
                onClick={handleRegister}
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
