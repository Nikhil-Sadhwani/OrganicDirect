import React from "react";
import homeBG from "../assets/homeBG.jpg";

export default function CropDetails() {
  return (
    <>
      <div className=" ">
        <img
          className="fixed top-0 h-[50vh] w-screen z-[-1]"
          src={homeBG}
          alt="Loading..."
        />
        <div className="h-[30vh]"></div>

        <div className="bg-white w-[35%] m-auto shadow-lg p-5 lg:p-8">
          <div
            className="flex justify-center flex-col text-center"
            style={{ alignItems: "center" }}
          >
            <img className="w-[100%] h-[215px]" src={homeBG} alt="Loading..." />
            <div className=" mx-8">
              <h2 className="text-[35px] font-bold">Title</h2>
              <p className="">Information</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
