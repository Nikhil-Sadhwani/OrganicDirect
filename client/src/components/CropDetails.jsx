import React, { useState } from "react";

export default function CropDetails(props) {
  const [showContent, setShowContent] = useState(false);
  const { propArray } = props;
  return (
    <>
      <div className=" ">
        <img
          className="fixed top-0 h-[50vh] w-screen z-[-1]"
          src={propArray.imageName}
          alt="Loading..."
        />
        <div className="h-[30vh]"></div>

        <div className="bg-white w-screen p-5 lg:p-8">
          <div className="flex" style={{ alignItems: "center" }}>
            <img
              className="w-[200px] h-[200px]"
              src={propArray.imageName}
              alt="Loading..."
            />
            <div className=" mx-8">
              <h2 className="text-[35px] font-bold">{propArray.name}</h2>
              <p className="ml-3">{propArray.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-5">
            <div
              className="text-center border-2 border-black hover:bg-slate-400 hover:bg-opacity-10 "
              onClick={() => {
                showContent
                  ? setShowContent(!showContent)
                  : setShowContent(false);
              }}
            >
              <h2 className="text-[17px] font-[600]">Education</h2>
            </div>
            <div
              className="text-center border-2 border-l-0 border-black hover:bg-slate-400 hover:bg-opacity-10"
              onClick={() => {
                showContent
                  ? setShowContent(true)
                  : setShowContent(!showContent);
              }}
            >
              <h2 className="text-[17px] font-[600]">Cultivation</h2>
            </div>
          </div>
          <div className={`p-10 ${showContent ? "hidden" : ""}`}>
            {propArray.education.map((content) => {
              return (
                <div className="my-3">
                  <h2 className=" text-[22px] font-[700]">{content.heading}</h2>
                  <ul className="ml-[14px]">
                    <li className="text-[18px]">{content.paraGraph}</li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className={`p-10 ${showContent ? "" : "hidden"}`}>
            {propArray.cultivation.map((content) => {
              return (
                <div className="my-3">
                  <h2 className=" text-[22px] font-[700]">{content.heading}</h2>
                  <ul className="ml-[14px]">
                    <li className="text-[18px]">{content.paraGraph}</li>
                  </ul>
                </div>
              );
            })}
          </div>

          {/* <h2 className={showContent ? "hidden" : ""}>Education</h2> */}
          {/* <h2 className={showContent ? "" : "hidden"}>Cultivation</h2> */}
        </div>
      </div>
    </>
  );
}
